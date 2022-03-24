import React, { useState } from "react";
import _data from "../../data";

function ActivitiesMobile(props) {
  const background = props;
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <>
      <div className="container magic-club-font">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-heading text-center h2-mobile-magicclub">
              <h2 className="magic-club-font">
                ATIVIDADES{" "}
                <strong className="magic-club-font magic-club-subtitle">
                  LÚDICAS
                </strong>
                <br />
              </h2>
              <div className="text-white lead project-font lh-sm">
                <p>
                  Atividades para datas comemorativas e feriados e jogos
                  especialmente elaborados para a expansão do conhecimento
                  cultural dos alunos.
                </p>

                <p>
                  <img
                    style={{}}
                    src="img/games/magic-club/activities.png"
                    alt="Iris"
                    className="img-fluid"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActivitiesMobile;
