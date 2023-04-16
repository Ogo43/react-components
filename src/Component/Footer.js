
const Footer = () => {
  return (
    <>
      <footer>
        <p className="nigeria">Nigeria</p>

        <div className="link-part">
          <ul className="link-left">
              <li>
                <a href="https://about.google/?utm_source=google-NG&utm_medium=referral&utm_campaign=hp-footer&fg=1">
                  About
                </a>
              </li>
              <li>
                <a href="https://www.google.com/intl/en_ng/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1l">
                  Advertising
                </a>
              </li>
              <li>
                <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">
                  Business
                </a>
              </li>
              <li>
                <a href="https://google.com/search/howsearchworks/?fg=1">
                  How Search works
                </a>
              </li>
          </ul>

          <ul className="middle-link">
            <li>
              <a href="https://sustainability.google/carbon-free/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer&utm_content=">
                Carbon neutral since 2007
              </a>
            </li>
          </ul>

          <ul className="link-right">
            <li>
              <a href="https://policies.google.com/privacy?hl=en-NG&fg=1">
                Privacy
              </a>
            </li>
            <li>
              <a href="https://policies.google.com/terms?hl=en-NG&fg=1">
                Terms
              </a>
            </li>
            <li>
              <button>Settings</button>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;