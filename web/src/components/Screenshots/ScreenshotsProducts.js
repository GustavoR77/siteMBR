import React, { useState } from "react";
import _data from "../../data";
import ScreenshotsMobile from "./ScreenshotsMobile";

function Screenshots(props) {
  const background = props;
  const [width, setWidth] = useState(window.innerWidth);
  const [screenshots, setScreenshots] = useState(
    _data.screenshots.screenshotsMagicClub
  );

  return (
    <>
      <section
        id="screenshots"
        className={"screenshots-section ptb-100 " + background.background}
      >
        <div className="container px-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center">
                <h2
                  className="magic-club-font magic-club-subtitle"
                  style={{ fontSize: "4rem" }}
                >
                  NOSSO APLICATIVO
                  <br />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="screen-slider-content mt-5">
          <div className="loop-carousel owl-carousel owl-theme dot-indicator">
            {(screenshots || []).map((screenshot, index) => {
              return (
                <img
                  src={screenshot.image}
                  alt={screenshot.alt}
                  className="img-fluid"
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Screenshots;
