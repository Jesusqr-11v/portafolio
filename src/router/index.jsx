import { datos } from "../project-info/info";
import { Projects } from "./components";
import { Link } from "react-router-dom";
import "./styles.css";

export const AllProjects = () => {
  return (
    <div className="bg">
      <div className="title__back"> 
        <Link to="/" className="Go__back">
          <img src="go-back.png" alt="go back icon" />
        </Link>
        <h1 className="project__title">Proyectos</h1>
      </div>
      <section className="section__container">
        {datos.map((dato) => {
          return (
            <div className="project__container" key={dato.id}>
              <Projects
                title={dato.title}
                description={dato.description}
                img={dato.img}
                ruta={dato.ruta}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};
