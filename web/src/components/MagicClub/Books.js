import React, { useState } from "react";
import _data from "../../data";
import BooksMobile from "./BooksMobile";

function Books(props) {
  const background = props;
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      {/* <section
        id="screenshots"
        className={"screenshots-section ptb-100 " + background}
      > */}
      <section
        className="screenshots-section ptb-100 "
        style={{
          backgroundImage: "url('img/games/magic-club/background-blue.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "100% 100%",
        }}
      >
        {width > 768 ? (
          <div className="container px-5">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2 className="magic-club-font" style={{ fontSize: "4rem" }}>
                    LIVROS{" "}
                    <strong className="magic-club-font magic-club-subtitle">
                      DIDÁTICOS
                    </strong>
                    <br />
                  </h2>
                  <p className="text-white lead project-font lh-sm">
                    Com atividades lúdicas, interessantes e atuais sempre
                    colocando o aluno como protagonista em seu processo de
                    aprendizagem. Todo nosso conteúdo está em conformidade com a
                    BNCC e também com a abordagem CLIL, ou seja, aprendizado de
                    língua e conteúdo integrados.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-12">
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
        ) : (
          <BooksMobile />
        )}
      </section>
    </>
  );
}

export default Books;
