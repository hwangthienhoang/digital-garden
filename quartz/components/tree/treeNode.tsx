import { sort } from "d3"
import { QuartzPluginData } from "../../plugins/vfile"
import { join } from "path"

export interface TreeNode {
  title: string
  slug: string // use to define page url
  path: string // use to define node's relationships
  depth: number
  children?: Array<TreeNode>
  isExpanded?: boolean
  isHighlighted?: boolean
}

type treeNodeProps = {
  node: TreeNode
}

// TODO: move other file/page to this group/folder, now empty slugs are ignore
const orphanPath = "other"

function trimCharacters(str: string, charsToRemove: string): string {
  const regex = new RegExp(`^${charsToRemove}+|${charsToRemove}+$`, "g")
  return str.replace(regex, "")
}

function slugToPath(slug?: string): string {
  // Force move empty slug to `other`
  return trimCharacters(slug || orphanPath, "/").toLowerCase()
}

function sanitizeTreeData(allFiles: QuartzPluginData[]): TreeNode[] {
  const output: TreeNode[] = []
  return allFiles
    .filter((v) => !!v.slug)
    ?.map(
      (v) =>
        ({
          title:
            v?.frontmatter?.title ||
            v.slug?.split("/").splice(-1)[0] ||
            slugToPath(v.slug).split("/").splice(-1)[0],
          slug: v.slug,
          path: slugToPath(v.slug),
          depth: slugToPath(v.slug).split("/").length,
        }) as TreeNode,
    )
    .sort((a, b) => a.slug.split("/").length - b.slug.split("/").length)
}

function isChildPath(childPath: string = "", parentPath: string = "") {
  // Ensure input is path not slug
  const childSegments = slugToPath(childPath).split("/")
  const parentSegments = slugToPath(parentPath).split("/")

  if (childSegments.length <= parentSegments.length) {
    return false
  }

  for (let i = 0; i < parentSegments.length; i++) {
    if (childSegments[i] !== parentSegments[i]) {
      return false
    }
  }

  return true
}

export function buildTreeData(nodes: TreeNode[]): TreeNode[] {
  const output: TreeNode[] = []
  for (const node of nodes) {
    node.children = nodes.filter((v) => {
      return isChildPath(v.path, node.path)
    })

    if (node.depth == 1) {
      output.push(node)
    }
  }

  return output
}

// includes: nodes have the same root
export function generateLineageNodes(
  allFiles: QuartzPluginData[],
  currentFile: QuartzPluginData,
): TreeNode[] {
  if (!currentFile.slug) {
    return []
  }

  const currentPathSegments = slugToPath(currentFile.slug).split("/")
  if (currentPathSegments.length == 1) {
    return sanitizeTreeData([currentFile])
  }

  const lineageFiles = allFiles.filter((file) => {
    const filePathSegments = slugToPath(file.slug).split("/")
    return currentPathSegments[0] == filePathSegments[0]
  })

  const lineageNodes = sanitizeTreeData(lineageFiles)

  const output: TreeNode[] = lineageNodes.map((v) => {
    v.isExpanded = isChildPath(currentFile?.slug, v.slug)
    v.isHighlighted = slugToPath(currentFile.slug) == v.path || isChildPath(currentFile?.slug, v.slug)
    return v
  })

  for (const node of lineageNodes) {
    const currentPathSegments = node.path.split("/")
    currentPathSegments.reduce((accumulator, currentValue) => {
      if (!!accumulator) {
        const exitsNode = output.some((v) => v.path == accumulator)
        if (!exitsNode) {
          output.push({
            title: accumulator.split("/").splice(-1)[0],
            slug: accumulator,
            path: accumulator,
            depth: accumulator.split("/").length,
            isExpanded: isChildPath(currentFile?.slug, accumulator),
            isHighlighted: isChildPath(currentFile?.slug, accumulator),
          })
        }
      }

      return `${accumulator}/${currentValue}`
    })
  }

  return output
}

// Build only from 1 node
export function treeNodeComponent({ node }: treeNodeProps) {
  const liClass = !!node?.children?.length
    ? `theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-${node.depth} menu__list-item ${!node.isExpanded ? "menu__list-item--collapsed" : ""}`
    : `theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-${node.depth} menu__list-item`

  return (
    <li class={liClass}>
      {!node?.children?.length ? (
        <a className={!node?.isHighlighted? "menu__link" : "menu__link menu__link--active"} href={join("/", node.slug)}>
          {node.title}
        </a>
      ) : (
        <>
          <div className="menu__list-item-collapsible">
            <a href="#" class={"menu__link menu__link--sublist " +`${!!node.isHighlighted ? "menu__link--active" : ""}`}>
              {node.title}
            </a>
          </div>
          <ul class="menu__list">
            {node.children.map((child, i) => treeNodeComponent({ node: child }))}
          </ul>
        </>
      )}
    </li>
  )
}
