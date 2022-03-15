import React, { useState } from "react";
import _data from "../../data";
import BooksMobile from "./BooksMobile";

function Method(props) {
  const background = props
  const [width, setWidth] = useState(window.innerWidth)

  return (
    <>
      {/* <section
        id="screenshots"
        className={"screenshots-section ptb-100 " + background.background}
  > */}
      <section
        className="screenshots-section ptb-100 "
        style={{
          backgroundImage: "url('img/games/alt/background-yellow.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
        }}
      >
        {width > 768 ?
          <div className="container magic-club-font">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center">
                  <h2 className="magic-club-font " style={{ color: "#ED7643", fontSize: '3rem' }}>
                    MÉTODO
                    <br />
                  </h2>
                  <p className="lead text-dark">
                    O método utilizado é audiovisual e por repetição. Os lindos gráficos e imagens chamam a atenção do aluno, que pode ouvir, ver e interagir com o aplicativo.
                  </p>
                  <p>
                    <img
                      src="img/games/alt/method.png"
                      alt="Books"
                      className="img-fluid"
                    />
                  </p>
                  <p className="lead text-dark">
                    Desta forma alcançamos crianças visuais, auditivas e cinestésicas.
                    As repetições e os exercícios fazem com que o aluno memorize e aprenda o conteúdo.
                  </p>
                </div>
              </div>
            </div>

          </div> : <BooksMobile />}
      </section>
    </>
  );
}

export default Method;
