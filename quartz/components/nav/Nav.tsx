import { QuartzComponentConstructor, QuartzComponentProps } from "../render_page/types"
interface NavOptions {}

export default ((opts?: Partial<NavOptions>) => {
  function Nav({ fileData, allFiles, displayClass }: QuartzComponentProps) {
    return (
      <nav className="navbar navbar--fixed-top">
        <div className="navbar__inner InnerContainer_1wkI">
          <div className="navbar__items">
            <a className="navbar__brand" href="/">
              <div className="navbar__logo">
                <img
                  src="/static/img/logo.svg"
                  alt="HoangHoang Logo"
                  className="themedImage_1VuW themedImage--dark_hz6m"
                />
              </div>
              <b className="navbar__title"> </b>
            </a>
            <div className="navbar__item dropdown dropdown--hoverable">
              <a href="#" className="navbar__link">
                Get Started
              </a>
              <ul className="dropdown__menu">
                <li>
                  <a
                    aria-current="page"
                    className="dropdown__link dropdown__link--active"
                    href="/docs/installation/"
                  >
                    Installation
                  </a>
                </li>
                <li>
                  <a className="dropdown__link" href="/docs/quick-start/react/">
                    React
                  </a>
                </li>
                <li>
                  <a className="dropdown__link" href="/docs/style-guide/">
                    Style Guide
                  </a>
                </li>
                <li>
                  <a className="dropdown__link" href="/docs/examples/">
                    Examples
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar__item dropdown dropdown--hoverable">
              <a href="#" className="navbar__link">
                Community
              </a>
              <ul className="dropdown__menu">
                <li>
                  <a
                    href="https://github.com/agile-ts/agile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown__link"
                  >
                    <span>
                      GitHub
                      <svg
                        width={12}
                        height={12}
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="iconExternalLink_3J9K"
                      >
                        <path
                          fill="currentColor"
                          d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                        />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/T9GzreAwPH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown__link"
                  >
                    <span>
                      Discord
                      <svg
                        width={12}
                        height={12}
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="iconExternalLink_3J9K"
                      >
                        <path
                          fill="currentColor"
                          d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                        />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackoverflow.com/questions/tagged/agile-ts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown__link"
                  >
                    <span>
                      Stack Overflow
                      <svg
                        width={12}
                        height={12}
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="iconExternalLink_3J9K"
                      >
                        <path
                          fill="currentColor"
                          d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                        />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/AgileFramework"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown__link"
                  >
                    <span>
                      Twitter
                      <svg
                        width={12}
                        height={12}
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="iconExternalLink_3J9K"
                      >
                        <path
                          fill="currentColor"
                          d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                        />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.reddit.com/r/AgileTs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown__link"
                  >
                    <span>
                      Reddit
                      <svg
                        width={12}
                        height={12}
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="iconExternalLink_3J9K"
                      >
                        <path
                          fill="currentColor"
                          d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                        />
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <a className="navbar__item navbar__link" href="/docs/introduction">
              Documentation
            </a>
          </div>
          <div className="navbar__items navbar__items--right">
            <div className="displayOnlyInLargeViewport_2uzv IconContainer_aWwG">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 496 512"
                className="Icon_3e04"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                className="Icon_3e04"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z" />
              </svg>
            </div>
            <div className="toggle_71bT toggleChecked_2FvV">
              <div className="toggleTrack_32Fl" role="button" tabIndex={-1}>
                <div className="toggleTrackCheck_3lV7">
                  <span className="toggleIcon_O4iE">🌜</span>
                </div>
                <div className="toggleTrackX_S2yS">
                  <span className="toggleIcon_O4iE">🌞</span>
                </div>
                <div className="toggleTrackThumb_xI_Z" />
              </div>
              <input
                type="checkbox"
                className="toggleScreenReader_28Tw"
                aria-label="Switch between dark and light mode"
              />
            </div>
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

  return Nav
}) satisfies QuartzComponentConstructor
