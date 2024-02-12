import { QuartzComponentConstructor, QuartzComponentProps } from "../render_page/types"
import darkmodeItemFactory from "./darkmodeItemFactory"
import discordItemFactory from "./discordItemFactory"
import githubItemFactory from "./githubItemFactory"

interface NavOptions {
  githubUrl?: string
  discordUrl?: string
}

const defaultNavOptions: NavOptions = {
  githubUrl: "https://github.com/hwangthienhoang/digital-garden",
  discordUrl: "https://discord.gg/",
}

export default ((opts?: Partial<NavOptions>) => {
  const options = { ...defaultNavOptions, ...opts }

  function Nav({ fileData, allFiles, displayClass, cfg }: QuartzComponentProps) {
    return (
      <nav className="navbar navbar--fixed-top">
        <div className="navbar__inner InnerContainer_1wkI">
          <div className="navbar__items">
            <a className="navbar__brand" href="/">
              <div className="navbar__logo">
                <img src="/static/img/logo.svg" alt="HoangHoang Logo" className="" />
              </div>
              <b className="navbar__title"> </b>
            </a>
            <div class="navbar__item dropdown dropdown--hoverable">
              <a href="#" class="navbar__link">
                Cheat sheets
              </a>
              <ul class="dropdown__menu">
                <li>
                  <a class="dropdown__link" href="/cheatsheets/Powershell">
                    Powershell
                  </a>
                </li>
              </ul>
            </div>
            <div class="navbar__item dropdown dropdown--hoverable">
              <a href="#" class="navbar__link">
                Community
              </a>
              <ul class="dropdown__menu">
                <li>
                  <a
                    href="https://github.com/hwangthienhoang/digital-garden"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="dropdown__link"
                  >
                    <span>
                      GitHub
                      <svg
                        width="12"
                        height="12"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        class="iconExternalLink_3J9K"
                      >
                        <path
                          fill="currentColor"
                          d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="dropdown__link"
                  >
                    <span>
                      Discord
                      <svg
                        width="12"
                        height="12"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        class="iconExternalLink_3J9K"
                      >
                        <path
                          fill="currentColor"
                          d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackoverflow.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="dropdown__link"
                  >
                    <span>
                      Stack Overflow
                      <svg
                        width="12"
                        height="12"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        class="iconExternalLink_3J9K"
                      >
                        <path
                          fill="currentColor"
                          d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="dropdown__link"
                  >
                    <span>
                      Twitter
                      <svg
                        width="12"
                        height="12"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        class="iconExternalLink_3J9K"
                      >
                        <path
                          fill="currentColor"
                          d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.reddit.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="dropdown__link"
                  >
                    <span>
                      Reddit
                      <svg
                        width="12"
                        height="12"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        class="iconExternalLink_3J9K"
                      >
                        <path
                          fill="currentColor"
                          d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <a className="navbar__item navbar__link" href="/posts/introduction">
              Introduction
            </a>
          </div>
          <div className="navbar__items navbar__items--right">
            <div className="displayOnlyInLargeViewport_2uzv IconContainer_aWwG">
              {githubItemFactory.content()}
              {discordItemFactory.content()}
            </div>
            {darkmodeItemFactory.content()}
            <div className="searchBox_1ZXk">
              <button type="button" className="DocSearch DocSearch-Button" aria-label="Search">
                <span className="DocSearch-Button-Container">
                  <svg width={20} height={20} className="DocSearch-Search-Icon" viewBox="0 0 20 20">
                    <path
                      d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                      stroke="currentColor"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="DocSearch-Button-Placeholder">Search</span>
                </span>
                <span className="DocSearch-Button-Keys">
                  <span className="DocSearch-Button-Key">
                    <svg width={15} height={15} className="DocSearch-Control-Key-Icon">
                      <path
                        d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953"
                        strokeWidth="1.2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="square"
                      />
                    </svg>
                  </span>
                  <span className="DocSearch-Button-Key">K</span>
                </span>
              </button>
            </div>
          </div>
          <div className="ProgressbarContainer_2_mz">
            <div className="Progressbar_3cuE" id="scrollbar2000" style={{ width: "100%" }} />
          </div>
        </div>
        <div
          aria-label="Navigation bar toggle"
          className="navbar__toggle"
          role="button"
          tabIndex={0}
        >
          <svg width={30} height={30} viewBox="0 0 30 30" aria-hidden="true">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeWidth={2}
              d="M4 7h22M4 15h22M4 23h22"
            />
          </svg>
        </div>
        <div role="presentation" className="navbar-sidebar__backdrop" />
      </nav>
    )
  }

  Nav.beforeDOMLoaded = [darkmodeItemFactory.script()].join(";")
  Nav.afterDOMLoaded = [
    githubItemFactory.script(options.githubUrl),
    discordItemFactory.script(options.discordUrl),
  ].join(";")
  return Nav
}) satisfies QuartzComponentConstructor
