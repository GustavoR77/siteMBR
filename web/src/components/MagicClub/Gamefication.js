import React, { useState } from "react";
import GameficationMobile from "./GameficationMobile";

function Gamefication(props) {
  const background = props;
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <>
      <section
        className="screenshots-section ptb-80 "
        style={{
          backgroundImage: "url('img/games/magic-club/background-purple3.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        {width > 768 ? (
          <div className="container px-5">
            <div className="row justify-content-center align-items-start">
              <div className="col-md-3">
                <img
                  src="img/games/magic-club/gamification2.png"
                  alt="Iris"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <div className="section-heading">
                  <h2
                    className="magic-club-font magic-club-subtitle"
                    style={{ fontSize: "4rem" }}
                  >
                    GAMEFICAÇÃO
                    <br />
                  </h2>
                  <p className="text-white lead project-font lh-sm">
                    Aplicativos para dispositivos móveis com objetivos
                    pedagógicos por meio de jogos divertidos.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-12">
                <img
                  src="img/games/magic-club/gamification.png"
                  alt="Iris"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        ) : (
          <GameficationMobile />
        )}
      </section>
    </>
  );
}

export default Gamefication;
