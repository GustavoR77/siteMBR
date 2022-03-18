import React, { useState, useEffect } from "react";

import Step1Mobile from "./Step1Mobile";

function Step1(props) {
  const background = props;
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <section
        id="about"
        className={"about-us ptb-100 " + background.background}
        style={{
          backgroundImage: "url('img/games/melhor-viagem/background-green.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        {width > 768 ? (
          <div className="container">
            <div className="row align-items-center justify-content-around px-5">
              <div className="col-md-6">
                <div className="about-content-left section-heading text-center">
                  <p className="lead project-font lh-base">
                    O jogo Melhor Viagem foi estruturado por nível de aprendizado, obedecendo aos parâmetros curriculares nacionais e conciliando todas as diretrizes educacionais vigentes no Brasil.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src="img/games/melhor-viagem/step1.png"
                  alt="about us"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        ) : (
          <Step1Mobile />
        )}
      </section>
    </>
  );
}

export default Step1;
