import React, { useState, useEffect } from "react";

function Step2Mobile(props) {
  const background = props;

  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <div className="container magic-club-font">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <div className="section-heading text-center">
              <div className="text-dark text-start p-3 lead project-font lh-same text-center">
                <p>
                  Além disso, visando a educação plena do estudante, o jogo
                  instiga o desenvolvimento de outras competências, como
                  disciplina, organização e tomada de decisões.
                </p>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="about-content-center">
                <img
                  src="img/games/melhor-viagem/step2-mobile.png"
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

export default Step2Mobile;
