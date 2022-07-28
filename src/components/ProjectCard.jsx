export default function ProjectCard(props) {
  return (
    <>
      <div className="card">
        <img src={props.img} alt="img proyecto" />
        <h4 className="project-title">{props.title}</h4>
        <p className="project-description">{props.description}</p>
        <div className="project-technologies">
          <h4 className="project-technologies--title">Technologies</h4>
          <div className="project-technologies--buttons">
            <p className="project-technologies--button">{props.tec1}</p>
            <p className="project-technologies--button">{props.tec2}</p>
            <p className="project-technologies--button">{props.tec3}</p>
          </div>
        </div>
        <div className="project-buttons">
          <button className="deploy-button">
            <a href={props.deployLink} target="_blank" rel="noopener noreferrer">
              DEPLOY
            </a>
          </button>
          <a href={props.repoLink} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>{" "}
          </a>
        </div>
      </div>
    </>
  );
}
