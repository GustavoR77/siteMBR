import React, { useState } from "react";
import _data from "../../data";
import MethodMobile from "./MethodMobile";

function Method(props) {
  const background = props;
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <section
        className={"screenshots-section ptb-100 " + background.background}
        style={{
          backgroundImage: "url('img/games/alt/background-yellow.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "100% 100%",
        }}
      >
        {width > 768 ? (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="section-heading text-start">
                  <h2
                    className="magic-club-font "
                    style={{ color: "#ED7643", fontSize: "3rem" }}
                  >
                    MÉTODO
                    <br />
                  </h2>
                  <div className="text-dark lead project-font lh-sm">
                    <p>
                      O método utilizado é audiovisual e por repetição. Os
                      lindos gráficos e imagens chamam a atenção do aluno, que
                      pode ouvir, ver e interagir com o aplicativo.
                    </p>
                    <p>
                      <img
                        src="img/games/alt/method.png"
                        alt="Books"
                        className="img-fluid"
                      />
                    </p>
                    <p>
                      Desta forma alcançamos crianças visuais, auditivas e
                      cinestésicas. As repetições e os exercícios fazem com que
                      o aluno memorize e aprenda o conteúdo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <MethodMobile />
        )}
      </section>
    </>
  );
}

export default Method;
