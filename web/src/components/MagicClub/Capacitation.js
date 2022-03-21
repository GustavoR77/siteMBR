import React, { useState } from "react";
import CapacitationMobile from "./CapacitationMobile";

function Capacitation(props) {
  const background = props;
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <section
        id="about"
        className={"about-us ptb-100 " + background.background}
      >
        {width > 768 ? (
          <div className="container magic-club-font text-dark">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6">
                <div className="about-content-left section-heading">
                  <h2 className="magic-club-font magic-club-subtitle">
                    CAPACITAÇÃO COMPLETA
                  </h2>
                  <p className="text-dark lead project-font lh-sm">
                    Treinamos os professores para que compreendam melhor o
                    bilinguismo e possam aproveitar ao máximo nossa metodologia.
                  </p>
                  <p>
                    <img
                      src="img/games/magic-club/capacitation.png"
                      alt="about us"
                      className="img-fluid"
                    />
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-content-right ml-5">
                  <img
                    src="img/games/magic-club/capacitation2.png"
                    alt="about us"
                    className="img-fluid"
                  />
                </div>
                <div className="about-content-right ml-5 text-dark lead project-font lh-sm">
                  <p>
                    Vídeos tutoriais de preparação de aulas que explicam, aula a
                    aula, o que o professor deve fazer.
                  </p>
                  <p>
                    Assistência pedagógica completa disponibilizada por diversos
                    canais para auxiliar em todo o processo de implantação e,
                    após esse momento, no dia a dia do professor, auxiliando-o
                    em todos os seus questionamentos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <CapacitationMobile />
        )}
      </section>
    </>
  );
}

export default Capacitation;
