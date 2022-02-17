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
                  CAPTURAS DE TELA
                  <br />
                </h2>
              </div>
            </div>
          </div>
          <div className="screen-slider-content mt-5">
            <div className=""></div>
            <div className="screen-carousel owl-carousel owl-theme dot-indicator">
              <div className="screen-carousel-single">
                <img
                  src="img/games/magic-club/screenshot1.png"
                  className="img-fluid"
                  alt="screenshots"
                  width="600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Screenshots;
