import React, { useState } from "react";
import _data from "../../data";

function Screenshots(props) {
  const background = props
  return (
    <>
      <section
        id="screenshots"
        className={"screenshots-section ptb-100 " + background}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center">
                <h2>
                  Nossos produtos digitais
                  <br />
                </h2>
                <p className="lead">
                  Desenvolvidos para causar uma experiência de aprendizagem única, lúdica e divertida.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="screen-slider-content mt-5">
            <div className=""></div>
            <div className="screen-carousel owl-carousel owl-theme dot-indicator">
              <div className="screen-carousel-single">
                <img
                  src="img/games/alt.png"
                  className="img-fluid"
                  alt="screenshots"
                  width="600"
                />
              </div>
              <div className="screen-carousel-single">
                <img
                  src="img/games/kubets.png"
                  className="img-fluid"
                  alt="screenshots"
                  width="600"
                />
              </div>
              <div className="screen-carousel-single">
                <img
                  src="img/games/melhor-viagem.png"
                  className="img-fluid"
                  alt="screenshots"
                  width="600"
                />
              </div>
              <div className="screen-carousel-single product-single">
                <a className="" href="/magic-club">
                  <img
                    src="img/games/magic-club.png"
                    className="img-fluid"
                    alt="screenshots"
                    width="600"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Screenshots;
