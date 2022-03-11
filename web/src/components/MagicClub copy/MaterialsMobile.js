import React, { useState } from "react";
import _data from "../../data";

function MaterialsMobile(props) {
  const background = props
  return (
    <>
        <div className="container magic-club-font">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center h2-mobile-magicclub">
                <h2 className="magic-club-subtitle magic-club-font">
                  MATERIAIS INTERATIVOS PARA LOUSAS DIGITAIS
                  <br />
                </h2>
                <p className="lead text-dark">
                  Programa exclusivo para levar
                  interatividade total à sala de aula. Com áudios gravados por nativos e todos os recursos que garantem uma experiência única aos alunos.
                </p>
                <p>
                <img
                      src="img/games/magic-club/materials.png"
                      alt="Iris"
                      className="img-fluid"
                    />
                </p>
              </div>
            </div>
          </div>

        </div>
    </>
  );
}

export default MaterialsMobile;
