import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <nav className="animate__animated animate__fadeInDown">
          <div className="logo-container">
            <Link to="/">
              <i className="fa-solid fa-code icon-logo"></i>
              <img src="./img/logo-robot.png" alt="Logo de la página" className="logo" />
            </Link>
          </div>
          <div className="sections-container">
            <Link to="/works">
              <p className="section-btn">Works</p>
            </Link>
            <Link to="/aboutMe-skills">
              <p className="section-btn">About me</p>
            </Link>
            <Link to="/contact">
              <p className="section-btn">Contact</p>
            </Link>
            <Link to="/articles">
              <p className="section-btn">Articles</p>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
