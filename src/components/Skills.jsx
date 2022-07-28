import SkillsTitles from "./Titles/SkillsTitles";

export default function Skills() {
  return (
    <>
      {/* <!-- Sección Skills and technologies --> */}
      <section className="skills-container" id="skills">
        <SkillsTitles />

        <div className="skills-card">
          <div className="skills-subcard">
            <p className="technologie">{">"} HTML</p>
            <p className="technologie">{">"} CSS</p>
            <p className="technologie">{">"} JavaScript</p>
            <p className="technologie">{">"} React Js</p>
            <p className="technologie">{">"} Tailwind CSS</p>
          </div>
          <div className="skills-subcard">
            <p className="technologie">{">"} Sass/Scss</p>
            <p className="technologie">{">"} Bootstrap</p>
            <p className="technologie">{">"} Git</p>
            <p className="technologie">{">"} Github</p>
            <p className="technologie">{">"} React Router</p>
          </div>
        </div>
      </section>
    </>
  );
}
