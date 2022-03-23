import React, { useState } from "react";
import _data from "../../data";
import ScreenshotsMobile from "./ScreenshotsMobile";

function Screenshots(props) {
  const background = props;
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <>
      <section
        id="screenshots"
        className={"screenshots-section ptb-100 " + background.background}
      >
        {width > 768 ? (
          <div className="container magic-club-font">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center">
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
        ) : (
          <ScreenshotsMobile />
        )}
      </section>
    </>
  );
}

export default Screenshots;
