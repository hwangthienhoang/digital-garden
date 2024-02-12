import { QuartzComponentConstructor, QuartzComponentProps } from "../render_page/types"
import { buildTreeData, generateLineageNodes, treeNodeComponent } from "./treeNode"
import treeScript from "../scripts/tree.inline"

export default (() => {
  function Tree({ fileData, allFiles }: QuartzComponentProps) {
    const lineageNodes = generateLineageNodes(allFiles, fileData)
    const treeData = buildTreeData(lineageNodes)

    return (
      <nav class="menu thin-scrollbar menu_Bmed">
        <ul class="theme-doc-sidebar-menu menu__list">
          {treeData.map((node, i) => treeNodeComponent({ node }))}
        </ul>
      </nav>
    )
  }
  Tree.afterDOMLoaded = treeScript
  return Tree
}) satisfies QuartzComponentConstructor
