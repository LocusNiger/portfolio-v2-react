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
            img="./img/project-5.png"
            title="My portfolio"
            description="This is the project in which I invested the most time in the design. It reflects the style of websites I try to create. I hope you like it!"
            tec1="React/Vite"
            tec2="Sass"
            tec3="JavaScript"
            deployLink="https://giffy-locusniger.vercel.app/"
            repoLink="https://github.com/LocusNiger/Portfolio-React"
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
          <ProjectCard
            img="./img/project-2.png"
            title="Tip Calculator"
            description="Calculate the correct tip and the total cost of the bill per person with this Tip Calculator!"
            tec1="HTML"
            tec2="Sass"
            tec3="JavaScript"
            deployLink="https://locusniger.github.io/tip-calc/"
            repoLink="https://github.com/LocusNiger/tip-calc"
          />
          {/* <!--------------------------------------------------------------> */}
          <ProjectCard
            img="./img/project-1.png"
            title="Expense Tracker"
            description={`Expense Tracker to have everything in order.`}
            tec1="HTML"
            tec2="Sass"
            tec3="JavaScript"
            deployLink="https://locusniger.github.io/expense-tracker/"
            repoLink="https://github.com/LocusNiger/expense-tracker"
          />
          {/* <!--------------------------------------------------------------> */}
        </div>
      </section>
    </>
  );
}
