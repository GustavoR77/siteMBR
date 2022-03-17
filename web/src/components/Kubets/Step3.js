import React, { useState, useEffect } from "react";

import AboutAltMobile from "./AboutKubetsMobile";

function Step3(props) {
  const background = props;
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <section
        id="about"
        className={"about-us ptb-100 " + background.background}
        style={{
          backgroundImage: "url('img/games/kubets/background-blue2.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        {width > 768 ? (
          <div className="container">
            <div className="row align-items-center justify-content-around px-5">
              <div className="col-md-5">
                <div className="about-content-left section-heading">
                  <p className="text-dark lead project-font lh-sm text-center">
                    O software inicia com a alfabetização e vai passando por
                    temas relacionados à língua portuguesa dentro das
                    expectativas que temos na base em relação ao componente de
                    Língua Portuguesa.
                  </p>
                </div>
              </div>
              <div className="col-md-7">
                  <img
                    src="img/games/kubets/step3.png"
                    alt="about us"
                    className="img-fluid"
                  />
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

export default Step3;
