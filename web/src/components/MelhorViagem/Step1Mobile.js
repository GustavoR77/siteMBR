import React, { useState, useEffect } from "react";

function Step1Mobile(props) {
  const background = props;

  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <div className="container magic-club-font">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <div className="section-heading text-center">
              <div className="text-white text-start p-3 lead project-font lh-same text-center">
                <p>
                  O jogo Melhor Viagem foi estruturado por nível de aprendizado,
                  obedecendo aos parâmetros curriculares nacionais e conciliando
                  todas as diretrizes educacionais vigentes no Brasil.
                </p>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="about-content-center">
                <img
                  src="img/games/melhor-viagem/step1.png"
                  alt="about us"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step1Mobile;
