import React, { useState } from "react";
import _data from "../../data";

function BooksMobile(props) {
  const background = props;
  return (
    <>
      <div className="container magic-club-font">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-heading text-center h2-mobile-magicclub">
              <h2 className="magic-club-font">
                LIVROS{" "}
                <strong className="magic-club-font magic-club-subtitle">
                  DIDÁTICOS
                </strong>
                <br />
              </h2>
              <div className="text-white lead project-font lh-sm">
                <p>
                  Com atividades lúdicas, interessantes e atuais sempre
                  colocando o aluno como protagonista em seu processo de
                  aprendizagem. Todo nosso conteúdo está em conformidade com a
                  BNCC e também com a abordagem CLIL, ou seja, aprendizado de
                  língua e conteúdo integrados.
                </p>
                <p>
                  <img
                    src="img/games/magic-club/books.png"
                    alt="Books"
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

export default BooksMobile;
