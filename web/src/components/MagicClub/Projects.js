import React, { useState } from "react";
import _data from "../../data";
import ProjectsMobile from "./ProjectsMobile";

function Projects(props) {
  const background = props;
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <section
        id="screenshots"
        className={"screenshots-section ptb-100 " + background.background}
      >
        {width > 768 ? (
          <div className="container px-5">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2 className="magic-club-subtitle magic-club-font" style={{ fontSize: "4rem" }}>
                    PROJETOS INTERDISCIPLINARES
                    <br />
                  </h2>
                  <p className="text-dark lead project-font lh-sm">
                    Que trabalham os 4 Pilares da UNESCO (Conhecer, Fazer,
                    Conviver e Ser) e que enfatizam as Competências e
                    Habilidades do Século XXI (pensamento crítico, criatividade,
                    colaboração e comunicação.)
                  </p>
                  <p className="text-center">
                    <img
                      src="img/games/magic-club/projects-mobile.png"
                      alt="Livro"
                      className="img-fluid"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <ProjectsMobile />
        )}
      </section>
    </>
  );
}

export default Projects;
