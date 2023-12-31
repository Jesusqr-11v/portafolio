import { Card } from "./components/card-project";
import { Navbar } from "./components/navbar";
import { Windows } from "./components/windows-contact";
import { datos } from "./project-info/info";
import { Description } from "./components/description";
import { Avatar } from "./components/avatar";

export const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="section high" id="top">
          <div className="section__description">
            <Description />
          </div>
          <div className="section__avatar">
            <Avatar />
          </div>
        </section>
        <section className="section half" id="center">
          <h2 className="section__subtitle">Projects</h2>
          {datos.map((dato) => {
            return (
              <div
                key={dato.id}
                style={{
                  top: `${dato.top}`,
                  left: `${dato.left}`,
                }}
                className="card__item"
              >
                <Card
                  title={dato.title}
                  description={dato.description}
                  link={dato.link}
                />
              </div>
            );
          })}
          <div className="section__redirection-shadow"></div>
          <a
            href="https://github.com/Jesusqr-11v"
            target="_blanck"
            className="section__redirection"
          >
            Visit My Github...
          </a>
        </section>
        <section className="section low" id="bottom">
          <Windows />
        </section>
      </main>
    </>
  );
};
