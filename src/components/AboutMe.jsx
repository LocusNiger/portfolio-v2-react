import AboutMeTitles from "./Titles/AboutMeTitles";

export default function AboutMe() {
  return (
    <>
      {/* <!-- Sección about me --> */}
      <section className="about-me-container" id="aboutme">
        <AboutMeTitles />

        <div className="about-me-card">
          <p className="about-me-text">
            Hi, I'm <span className="spancito">Iván</span>, a self-taught Front-End developer.
          </p>
          <p className="about-me-text">
            I like to create beautiful and colorful websites and stay up to date with technology trends.
          </p>
          <p className="about-me-text">I am in continuous learning, currently creating projects with React Js.</p>
        </div>
      </section>
    </>
  );
}
