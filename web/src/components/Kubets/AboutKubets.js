import React, { useState, useEffect } from "react";

import AboutAltMobile from "./AboutKubetsMobile";

function About(props) {
  const background = props;

  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <section
        id="about"
        className={"about-us ptb-100 " + background.background}
      >
        {width > 768 ? (
          <div className="container magic-club-font">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6">
                <div className="about-content-left section-heading">
                  <h2 className="text-dark magic-club-font">Jogo pedagógico</h2>
                  <h2
                    className="magic-club-subtitle magic-club-font"
                    style={{
                      color: "#4A79BC",
                      fontSize: "4rem",
                    }}
                  >
                    KUBETS
                  </h2>
                  <p className="text-dark lead ">
                    Kubets é um jogo pedagógico criado pela MBR Tecnologia
                    Educacional, direcionado a estudantes da rede pública de
                    ensino do 1º ao 5º ano do Ensino Fundamental 1. Por meio da
                    lucidade, da interação com a tecnologia e do protagonismo do
                    estudante, o jogo contribui para o processo de ensino -
                    aprendizagem do componente curricular da Língua Portuguesa,
                    mais especificamente, podendo ainda assim trabalhar de forma
                    multi-disciplinar.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="about-content-right"
                  style={{ marginLeft: "9rem" }}
                >
                  <img
                    src="img/games/kubets/about.png"
                    alt="about us"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <AboutAltMobile />
        )}
      </section>
    </>
  );
}

export default About;
