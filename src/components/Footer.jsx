import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-sections">
          <p className="footer-title">Sections</p>
          <div className="linea"></div>
          <ul>
            <li>
              <Link className="footer-link" to="/works">
                Works
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/aboutMe-skills">
                About Me
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/aboutMe-skills">
                Skills
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/contact">
                Get in touch
              </Link>
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
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://medium.com/@sanchezivan.798" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon="fa-brands fa-medium" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
