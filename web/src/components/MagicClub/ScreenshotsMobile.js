import React, { useState } from "react";
import _data from "../../data";

function ScreenshotsMobile(props) {
  const background = props;
  return (
    <>
      <div className="container magic-club-font">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-heading text-center h2-mobile-magicclub">
              <h2 className="magic-club-font magic-club-subtitle">
                NOSSO APLICATIVO
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
                src="img/games/magic-club.png"
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
