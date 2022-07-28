export default function Header() {
  return (
    <>
      <header>
        <nav className="animate__animated animate__fadeInDown">
          <div className="logo-container">
            <i className="fa-solid fa-code icon-logo"></i>
            <img src="./img/logo-robot.png" alt="Logo de la página" className="logo" />
          </div>
          <div className="sections-container">
            <a href="#works">
              <p className="section-btn">Works</p>
            </a>
            <a href="#aboutme">
              <p className="section-btn">About me</p>
            </a>
            <a href="#GIT">
              <p className="section-btn">Get in touch</p>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
