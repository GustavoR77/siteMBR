import React, { useState, useEffect } from "react";

import AboutAltMobile from "./AboutKubetsMobile";

function Step1(props) {
  const background = props;
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <section
        id="about"
        className={"about-us ptb-100 " + background.background}
        style={{
          backgroundImage: "url('img/games/kubets/background-blue.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        {width > 768 ? (
          <div className="container magic-club-font">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6">
                <div className="about-content-left section-heading">
                  <p className="lead">
                    Visando a educação plena do estudante, o jogo instiga o
                    desenvolvimento de outras competências, como disciplina,
                    higiene, saúde, gestão do lar e administração das finanças.
                  </p>
                  <p className="text-center">
                    <img
                      src="img/games/kubets/step1.png"
                      alt="about us"
                      className="img-fluid"
                    />
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="about-content-right"
                  style={{ marginLeft: "9rem" }}
                >
                  <img
                    src="img/games/kubets/quarto.png"
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

export default Step1;
