import React, { useState, useEffect } from "react";

import Step3Mobile from "./Step3Mobile";

function Step3(props) {
  const background = props;
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <section
        id="about"
        className={"about-us ptb-100 " + background.background}
        style={{
          backgroundImage: "url('img/games/melhor-viagem/background-greenlight.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        {width > 768 ? (
          <div className="container">
            <div className="row align-items-center justify-content-around px-5">
              <div className="col-md-5">
                <div className="about-content-left section-heading text-dark lead project-font lh-sm text-center">
                  <p className="">
                    Respeitando todos os objetivos de aprendizagem da base e com
                    a proposta de desafio onde o aluno tem a responsabilidade de
                    pilotar um avião e a cada etapa vencida ele vai passando as
                    fases do jogo, trabalhando tudo que se pede na proposta de
                    Língua Portuguesa.
                  </p>
                  <p>
                    O layout é extremamente chamativo e o aluno tem a
                    responsabilidade de ser piloto e levar o avião até o ponto
                    final.
                  </p>
                </div>
              </div>
              <div className="col-md-7">
                <img
                  src="img/games/melhor-viagem/step3.png"
                  alt="about us"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        ) : (
          <Step3Mobile />
        )}
      </section>
    </>
  );
}

export default Step3;
