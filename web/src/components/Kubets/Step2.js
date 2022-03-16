import React, { useState, useEffect } from "react";

import AboutAltMobile from "./AboutKubetsMobile";

function Step2(props) {
  const background = props;
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <section
        id="about"
        className={"about-us ptb-100 " + background.background}
      >
        {width > 768 ? (
          <div className="container magic-club-font">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6">
                <div className="about-content-left section-heading">
                  <img
                    src="img/games/kubets/step2.png"
                    alt="about us"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="about-content-right"
                  style={{ marginLeft: "9rem" }}
                >
                  <p className="lead text-dark lh-lg">
                    O software inicia com a alfabetização e vai passando por
                    temas relacionados à língua portuguesa dentro das
                    expectativas que temos na base em relação ao componente de
                    Língua Portuguesa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <AboutAltMobile />
        )}
      </section>
    </>
  );
}

export default Step2;
