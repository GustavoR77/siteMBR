import React, { useState, useEffect } from "react";

import Step2Mobile from "./Step2Mobile";

function Step2(props) {
  const background = props;
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <section
        id="about"
        className={"about-us ptb-100 " + background.background}
      >
        {width > 768 ? (
          <div className="container">
            <div className="row align-items-center justify-content-center px-5">
              <div className="col-md-5">
                <div className="about-content-left section-heading">
                  <img
                    src="img/games/kubets/step2.png"
                    alt="about us"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="project-font lead text-dark lh-sm text-center"
                >
                  <p>
                    O aluno vai passar por desafios e a cada desafio vencido ele evolui, mudando de nível.
                  </p>
                  <p>
                    O progresso ocorre dentro de um currículo espiral considerando o conhecimento prévio do aluno.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Step2Mobile />
        )}
      </section>
    </>
  );
}

export default Step2;
