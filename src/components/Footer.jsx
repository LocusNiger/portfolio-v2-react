export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-sections">
          <p className="footer-title">Sections</p>
          <div className="linea"></div>
          <ul>
            <li>
              <a className="footer-link" href="#works">
                Works
              </a>
            </li>
            <li>
              <a className="footer-link" href="#aboutme">
                About Me
              </a>
            </li>
            <li>
              <a className="footer-link" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="footer-link" href="#GIT">
                Get in touch
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <p className="footer-title">Follow me</p>
          <div className="linea"></div>
          <div className="footer-social__icons">
            <a href="https://github.com/LocusNiger/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ivansanchez-frontend/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
