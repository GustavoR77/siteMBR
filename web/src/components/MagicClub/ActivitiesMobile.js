import React, { useState } from "react";
import _data from "../../data";

function ActivitiesMobile(props) {
  const background = props;
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <>
      <div className="container magic-club-font">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-heading text-center h2-mobile-magicclub">
              <h2 className="magic-club-font">
                ATIVIDADES{" "}
                <strong className="magic-club-font magic-club-subtitle">
                  LÚDICAS
                </strong>
                <br />
              </h2>
              <div className="text-white lead project-font lh-sm">
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
                <p>
                  Richard McClintock, a Latin professor at Hampden-Sydney
                  College in Virginia, looked up one of the more obscure Latin
                  words, consectetur, from a Lorem Ipsum passage, and going
                  through the cites of the word in classical literature,
                  discovered the undoubtable source. Lorem Ipsum comes from
                  sections 1.10.3.
                </p>
                <p>
                  {" "}
                  And 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                  of Good and Evil) by Cicero, written in 45 BC. This book is a
                  treatise on the theory of ethics, very popular during the
                  Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
                  sit amet..", comes from a line in section 1.10.32.
                </p>

                <p>
                  <img
                    style={{}}
                    src="img/games/magic-club/activities.png"
                    alt="Iris"
                    className="img-fluid"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActivitiesMobile;
