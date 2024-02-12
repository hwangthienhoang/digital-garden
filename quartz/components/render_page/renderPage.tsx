import { render } from "preact-render-to-string"
import { visit } from "unist-util-visit"
import { Root, Element, ElementContent } from "hast"
import { QuartzComponent, QuartzComponentProps } from "../types"
import { FullSlug, RelativeURL, joinSegments, normalizeHastElement } from "../../util/path"
import { JSResourceToScriptElement, StaticResources } from "../../util/resources"
import { QuartzPluginData } from "../../plugins/vfile"
import { GlobalConfiguration } from "../../cfg"
import { i18n } from "../../i18n"
import HeaderConstructor from "./Header"
import BodyConstructor from "./Body"

interface RenderComponents {
  head: QuartzComponent
  header: QuartzComponent[]
  beforeBody: QuartzComponent[]
  pageBody: QuartzComponent
  left: QuartzComponent[]
  right: QuartzComponent[]
  footer: QuartzComponent
}

export function pageResources(
  baseDir: FullSlug | RelativeURL,
  staticResources: StaticResources,
): StaticResources {
  const contentIndexPath = joinSegments(baseDir, "static/contentIndex.json")
  const contentIndexScript = `const fetchData = fetch("${contentIndexPath}").then(data => data.json())`

  return {
    css: [joinSegments(baseDir, "index.css"), ...staticResources.css],
    js: [
      {
        src: joinSegments(baseDir, "prescript.js"),
        loadTime: "beforeDOMReady",
        contentType: "external",
      },
      {
        loadTime: "beforeDOMReady",
        contentType: "inline",
        spaPreserve: true,
        script: contentIndexScript,
      },
      ...staticResources.js,
      {
        src: joinSegments(baseDir, "postscript.js"),
        loadTime: "afterDOMReady",
        moduleType: "module",
        contentType: "external",
      },
    ],
  }
}

let pageIndex: Map<FullSlug, QuartzPluginData> | undefined = undefined
function getOrComputeFileIndex(allFiles: QuartzPluginData[]): Map<FullSlug, QuartzPluginData> {
  if (!pageIndex) {
    pageIndex = new Map()
    for (const file of allFiles) {
      pageIndex.set(file.slug!, file)
    }
  }

  return pageIndex
}

export function renderPage(
  cfg: GlobalConfiguration,
  slug: FullSlug,
  componentData: QuartzComponentProps,
  components: RenderComponents,
  pageResources: StaticResources,
): string {
  // process transcludes in componentData
  visit(componentData.tree as Root, "element", (node, _index, _parent) => {
    if (node.tagName === "blockquote") {
      const classNames = (node.properties?.className ?? []) as string[]
      if (classNames.includes("transclude")) {
        const inner = node.children[0] as Element
        const transcludeTarget = inner.properties["data-slug"] as FullSlug
        const page = getOrComputeFileIndex(componentData.allFiles).get(transcludeTarget)
        if (!page) {
          return
        }

        let blockRef = node.properties.dataBlock as string | undefined
        if (blockRef?.startsWith("#^")) {
          // block transclude
          blockRef = blockRef.slice("#^".length)
          let blockNode = page.blocks?.[blockRef]
          if (blockNode) {
            if (blockNode.tagName === "li") {
              blockNode = {
                type: "element",
                tagName: "ul",
                properties: {},
                children: [blockNode],
              }
            }

            node.children = [
              normalizeHastElement(blockNode, slug, transcludeTarget),
              {
                type: "element",
                tagName: "a",
                properties: { href: inner.properties?.href, class: ["internal"] },
                children: [
                  { type: "text", value: i18n(cfg.locale).components.transcludes.linkToOriginal },
                ],
              },
            ]
          }
        } else if (blockRef?.startsWith("#") && page.htmlAst) {
          // header transclude
          blockRef = blockRef.slice(1)
          let startIdx = undefined
          let endIdx = undefined
          for (const [i, el] of page.htmlAst.children.entries()) {
            if (el.type === "element" && el.tagName.match(/h[1-6]/)) {
              if (endIdx) {
                break
              }

              if (startIdx !== undefined) {
                endIdx = i
              } else if (el.properties?.id === blockRef) {
                startIdx = i
              }
            }
          }

          if (startIdx === undefined) {
            return
          }

          node.children = [
            ...(page.htmlAst.children.slice(startIdx, endIdx) as ElementContent[]).map((child) =>
              normalizeHastElement(child as Element, slug, transcludeTarget),
            ),
            {
              type: "element",
              tagName: "a",
              properties: { href: inner.properties?.href, class: ["internal"] },
              children: [
                { type: "text", value: i18n(cfg.locale).components.transcludes.linkToOriginal },
              ],
            },
          ]
        } else if (page.htmlAst) {
          // page transclude
          node.children = [
            {
              type: "element",
              tagName: "h1",
              properties: {},
              children: [
                {
                  type: "text",
                  value:
                    page.frontmatter?.title ??
                    i18n(cfg.locale).components.transcludes.transcludeOf({
                      targetSlug: page.slug!,
                    }),
                },
              ],
            },
            ...(page.htmlAst.children as ElementContent[]).map((child) =>
              normalizeHastElement(child as Element, slug, transcludeTarget),
            ),
            {
              type: "element",
              tagName: "a",
              properties: { href: inner.properties?.href, class: ["internal"] },
              children: [
                { type: "text", value: i18n(cfg.locale).components.transcludes.linkToOriginal },
              ],
            },
          ]
        }
      }
    }
  })

  const {
    head: Head,
    header,
    beforeBody,
    pageBody: Content,
    left,
    right,
    footer: Footer,
  } = components
  const Header = HeaderConstructor()
  const Body = BodyConstructor()

  const LeftComponent = (
    <div page-section="left">
      {left.map((BodyComponent) => (
        <BodyComponent {...componentData} />
      ))}
    </div>
  )

  const RightComponent = (
    <div page-section="right">
      {right.map((BodyComponent) => (
        <BodyComponent {...componentData} />
      ))}
    </div>
  )

  const lang = componentData.frontmatter?.lang ?? cfg.locale?.split("-")[0] ?? "en"
  const doc = (
    <html lang={lang}>
      <Head {...componentData} />
      <body data-slug={slug} class="vsc-initialized">
        <div id="__docusaurus">
          <Body {...componentData}>
            <div page-section="top" class="navbar--fixed-top">
              <Header {...componentData}>
                {header.map((HeaderComponent) => (
                  <HeaderComponent {...componentData} />
                ))}
              </Header>
            </div>

            <div class="Wrapper_ReNv main-docs-wrapper" page-section="center">
              <div class="docPage_3AUJ">
                <aside class="docSidebarContainer_2LAn">
                  <div class="sidebar_15mo sidebarWithHideableNavbar_267A">
                    <a tabindex="-1" class="sidebarLogo_3h0W" href="/">
                      <img
                        src="/static/img/logo.svg"
                        alt="HoangHoang Logo"
                        class="themedImage_1VuW themedImage--dark_hz6m"
                      />
                      <b> </b>
                    </a>
                    {LeftComponent}
                  </div>
                </aside>
                <main class="docMainContainer_2AUC">
                  <div class="padding-vert--lg container docItemWrapper_1WZa">
                    <div class="row">
                      <div class="col docItemCol_3FnS">
                        <div class="docItemContainer_33ec">
                          <article>
                            <div class="theme-doc-markdown markdown">
                              {beforeBody.map((BodyComponent) => (
                                <BodyComponent {...componentData} />
                              ))}
                              <Content {...componentData} />
                            </div>
                          </article>
                        </div>
                      </div>
                      <div class="col col--3">{RightComponent}</div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </Body>
          <Footer {...componentData} />
        </div>
      </body>
      {pageResources.js
        .filter((resource) => resource.loadTime === "afterDOMReady")
        .map((res) => JSResourceToScriptElement(res))}
    </html>
  )

  return "<!DOCTYPE html>\n" + render(doc)
}
