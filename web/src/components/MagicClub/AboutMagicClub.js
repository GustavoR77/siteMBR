import React, { useState, useEffect } from "react";

import AboutMagicClubMobile from "./AboutMagicClubMobile";

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
          <div className="container px-5">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6">
                <div className="about-content-center section-heading text-center">
                  <h2 className="text-dark magic-club-font">
                    SISTEMA BILÍNGUE
                  </h2>
                  <h2
                    className="magic-club-subtitle magic-club-font"
                    style={{ fontSize: "4rem" }}
                  >
                    MAGIC CLUB
                  </h2>
                </div>
                <div className="text-dark lead project-font lh-sm">
                  <p>
                    O MAGIC CLUB é um Sistema de Ensino Bilíngue para alunos dos
                    anos iniciais do Ensino Fundamental, desenvolvido pela MBR
                    Tecnologia Educacional, uma EdTech com 23 anos de atuação no
                    mercado educacional brasileiro e em outros 12 países.
                  </p>
                  <p>
                    Chamamos de sistema de ensino, pois unimos toda a
                    experiência da MBR com o que há de mais moderno e eficiente
                    em metodologias para o aprendizado de idiomas. Isso tudo com
                    o único propósito de capacitar os alunos a falarem inglês
                    fluentemente.{" "}
                  </p>
                </div>

                <p>
                  <img
                    src="img/games/magic-club/about2.png"
                    alt="about us"
                    className="img-fluid"
                  />
                </p>
              </div>
              <div className="col-md-6">
                <div className="about-content-right ml-5">
                  <img
                    src="img/games/magic-club/about.png"
                    alt="about us"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <AboutMagicClubMobile />
        )}
      </section>
    </>
  );
}

export default About;
