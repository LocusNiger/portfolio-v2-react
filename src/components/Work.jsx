import ProjectCard from "./ProjectCard";
import WorkTitles from "./Titles/WorkTitles";

export default function Work() {
  return (
    <>
      <section className="work-container">
        <WorkTitles />
        {/* <!-- Grid de tarjetas (proyectos) --> */}
        <div className="cards-container">
          {/* <!--------------------------------------------------------------> */}
          <ProjectCard
            img="./img/project-6.png"
            title="Movies App"
            description="SPA for the 'Alkemy React Skill Up'."
            tec1="React"
            tec2="Tailwind"
            tec3="ReactRouter"
            deployLink="https://trending-movies-and-series.vercel.app/"
            repoLink="https://github.com/LocusNiger/movies-series-pwa"
          />
          {/* <!--------------------------------------------------------------> */}
          <ProjectCard
            img="./img/project-5.png"
            title="My portfolio"
            description="This is the project in which I invested the most time in the design. It reflects the style of websites I try to create. I hope you like it!"
            tec1="React"
            tec2="Sass"
            tec3="JavaScript"
            deployLink="https://ivansanchez-portfolio.vercel.app/"
            repoLink="https://github.com/LocusNiger/portfolio-v2-react"
          />

          {/* <!--------------------------------------------------------------> */}
          <ProjectCard
            img="./img/project-4.png"
            title="Giffy"
            description="This project is a GIF searcher in which I used the Giphy API."
            tec1="React"
            tec2="Tailwind"
            tec3="Wouter"
            deployLink="https://giffy-locusniger.vercel.app/"
            repoLink="https://github.com/LocusNiger/giffy"
          />

          {/* <!--------------------------------------------------------------> */}
          <ProjectCard
            img="./img/project-3.png"
            title="Puppina Accesorios"
            description={`This website was my final project for the Coderhouse web development course.`}
            tec1="HTML"
            tec2="Sass"
            tec3="Bootstrap"
            deployLink="https://locusniger.github.io/Puppina_Accesorios/"
            repoLink="https://github.com/LocusNiger/Puppina_Accesorios"
          />
          {/* <!--------------------------------------------------------------> */}
        </div>
      </section>
    </>
  );
}
