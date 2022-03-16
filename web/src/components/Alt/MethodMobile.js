import React, { useState } from "react";
import _data from "../../data";

function MethodMobile(props) {
  const background = props;
  return (
    <>
      <div className="container magic-club-font">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-heading text-center">
              <h2
                className="magic-club-font"
                style={{ color: "#ED7643", fontSize: "3rem" }}
              >
                MÉTODO
                <br />
              </h2>
              <p className="lead text-dark project-font lh-same">
                O método utilizado é audiovisual e por repetição. Os lindos
                gráficos e imagens chamam a atenção do aluno, que pode ouvir,
                ver e interagir com o aplicativo.
              </p>
              <p>
                <img
                  src="img/games/alt/method-mobile.png"
                  alt="Books"
                  className="img-fluid"
                />
              </p>
              <p className="lead text-dark project-font lh-same">
                Desta forma alcançamos crianças visuais, auditivas e
                cinestésicas. As repetições e os exercícios fazem com que o
                aluno memorize e aprenda o conteúdo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MethodMobile;
