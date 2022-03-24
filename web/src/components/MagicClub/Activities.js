import React, { useState } from "react";
import _data from "../../data";
import ActivitiesMobile from "./ActivitiesMobile";

function Activities(props) {
  const background = props;
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <>
      <section
        className="screenshots-section ptb-100 "
        style={{
          backgroundImage: "url('img/games/magic-club/background-green.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "100% 100%",
        }}
      >
        {width > 768 ? (
          <div className="container px-5">
            <div className="row justify-content-start">
              <div className="col-md-6">
                <div className="section-heading text-start">
                  <h2 className="magic-club-font" style={{ fontSize: "4rem" }}>
                    ATIVIDADES{" "}
                    <strong className="magic-club-font magic-club-subtitle">
                      LÚDICAS
                    </strong>
                    <br />
                  </h2>
                  <p className="text-white lead project-font lh-sm">
                    Atividades para datas comemorativas e feriados e jogos
                    especialmente elaborados para a expansão do conhecimento
                    cultural dos alunos.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12">
               
                  <img
                    src="img/games/magic-club/activities.png"
                    alt="Iris"
                    className="img-fluid"
                  />
              
              </div>
            </div>
          </div>
        ) : (
          <ActivitiesMobile />
        )}
      </section>
    </>
  );
}

export default Activities;
