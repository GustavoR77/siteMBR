import React, { useState, useEffect } from "react";

function AboutMelhorViagemMobile(props) {
  const background = props;

  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <div className="container magic-club-font">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <div className="section-heading text-center">
              <h2
                className="text-dark magic-club-font"
                style={{ fontSize: "2.5rem" }}
              >
                Jogo pedagógico
              </h2>
              <h2
                className="magic-club-subtitle magic-club-font"
                style={{
                  color: "#15807F",
                  fontSize: "4rem",
                }}
              >
                MELHOR VIAGEM
              </h2>
              <div className="col-md-5 text-center">
                <img
                  src="img/games/melhor-viagem/about.png"
                  alt="about us"
                  className="img-fluid"
                />
              </div>
              <div className="text-dark lead project-font lh-sm text-center ">
                <p className="fst-italic fw-bolder fs-3">
                  Pilote um avião pelo Brasil enquanto aprende a Língua
                  Portuguesa!
                </p>
                <p>
                  Melhor Viagem é um jogo pedagógico criado pela MBR Tecnologia
                  Educacional direcionado a estudantes da rede pública de ensino
                  do 6º ao 9º ano do Ensino Fundamental 2.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMelhorViagemMobile;
