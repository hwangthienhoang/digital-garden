import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

function PageTitle({ fileData, cfg, displayClass }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h1 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>{title}</a>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}
`
PageTitle.afterDOMLoaded =`
  ; (function (history) {
    var pushState = history.pushState;
    history.pushState = function (state) {
      if (typeof history.onpushstate == "function") {
        history.onpushstate({ state: state });
      }
      history.go(-history.length);
      return window.location.href = arguments[2];
    };
  })(window.history);
  `

export default (() => PageTitle) satisfies QuartzComponentConstructor
