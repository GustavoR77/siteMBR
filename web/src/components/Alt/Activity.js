import React, { useState } from "react";
import _data from "../../data";
import ActivityMobile from "./ActivityMobile";

function Activity(props) {
  const background = props;
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <section
        className={"screenshots-section ptb-100 " + background.background}
        style={{
          backgroundImage: "url('img/games/alt/background-blue.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        {width > 768 ? (
          <div className="container magic-club-font">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center">
                  <p>
                    <img
                      src="img/games/alt/activity-boy-mobile.png"
                      alt="Books"
                      className="img-fluid"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <ActivityMobile />
        )}
      </section>
    </>
  );
}

export default Activity;
