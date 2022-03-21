import React, { useState } from "react";
import _data from "../../data";

function ScreenshotsMobile(props) {
  const background = props;
  return (
    <>
      <div className="container magic-club-font">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-heading text-center">
              <h2
                className="magic-club-font magic-club-subtitle"
                style={{ color: "#22A176", fontSize: "3rem" }}
              >
                CAPTURAS DE TELA
                <br />
              </h2>
            </div>
          </div>
        </div>
        <div className="screen-slider-content">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default ScreenshotsMobile;
