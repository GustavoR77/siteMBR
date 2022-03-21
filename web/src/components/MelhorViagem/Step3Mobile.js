import React, { useState, useEffect } from "react";

function Step3Mobile(props) {
  const background = props;

  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <div className="container magic-club-font">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <div className="section-heading text-center">
              <div className="text-dark text-start p-3 lead project-font lh-sm text-center">
                <p>
                  Respeitando todos os objetivos de aprendizagem da base e com a
                  proposta de desafio onde o aluno tem a responsabilidade de
                  pilotar um avião e a cada etapa vencida ele vai passando as
                  fases do jogo, trabalhando tudo que se pede na proposta de
                  Língua Portuguesa.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div className="about-content-center">
              <img
                src="img/games/melhor-viagem/step3.png"
                alt="about us"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="section-heading text-center">
              <div className="text-dark text-start p-3 lead project-font lh-sm text-center">
                <p>
                  O layout é extremamente chamativo e o aluno tem a
                  responsabilidade de ser piloto e levar o avião até o ponto
                  final.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step3Mobile;
