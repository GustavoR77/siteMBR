import React, { useState } from "react";
import _data from "../../data";

function ProjectsMobile(props) {
  const background = props;
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <div className="container magic-club-font">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-heading text-center h2-mobile-magicclub">
              <h2 className="magic-club-subtitle magic-club-font ">
                PROJETOS INTERDISCIPLINARES
                <br />
              </h2>
              <p className="text-dark lead project-font lh-sm">
                Que trabalham os 4 Pilares da UNESCO (Conhecer, Fazer, Conviver
                e Ser) e que enfatizam as Competências e Habilidades do Século
                XXI (pensamento crítico, criatividade, colaboração e
                comunicação.)
              </p>
              <p>
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
    </>
  );
}

export default ProjectsMobile;
