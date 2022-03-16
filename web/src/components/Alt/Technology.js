import React, { useState } from "react";
import _data from "../../data";
import TechnologyMobile from "./TechnologyMobile";

function Technology(props) {
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
                  <h2
                    className="magic-club-subtitle magic-club-font "
                    style={{ color: "#1E6DB9", fontSize: "3rem" }}
                  >
                    TECNOLOGIA E EDUCAÇÃO INCLUSIVA
                    <br />
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12">
                <p>
                  <img
                    src="img/games/alt/technology.png"
                    alt="Livro"
                    className="img-fluid"
                  />
                </p>
              </div>
            </div>
          </div>
        ) : (
          <TechnologyMobile />
        )}
      </section>
    </>
  );
}

export default Technology;
