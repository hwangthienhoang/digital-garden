import darkmodeScript from "../scripts/darkmode.inline"

export default {
  content: () => {
    return (
      <div id="darkmode-toggle-wrapper" className="toggle_71bT toggleChecked_2FvV">
        <div className="toggleTrack_32Fl">
          <label className="toggleTrackCheck_3lV7">
            <span className="toggleIcon_O4iE">🌜</span>
          </label>
          <label className="toggleTrackX_S2yS">
            <span className="toggleIcon_O4iE">🌞</span>
          </label>
          <label className="toggleTrackThumb_xI_Z"></label>
        </div>
        <input
          id="darkmode-toggle"
          type="checkbox"
          className="toggleScreenReader_28Tw toggle"
          aria-label="Switch between dark and light mode"
        />
      </div>
    )
  },
  script: () => {
    return darkmodeScript
  },
}
