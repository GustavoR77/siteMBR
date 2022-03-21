import React, { useState } from "react";
import _data from "../../data";
import ActivitiesMobile from "./ActivitiesMobile";

function Activities(props) {
  const background = props
  const [width, setWidth] = useState(window.innerWidth)
  return (
    <>
      <section
        className="screenshots-section ptb-100 "
        style={{
          backgroundImage: "url('img/games/magic-club/background-green.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
        }}
      >
        {width > 768 ? 
        <div className="container magic-club-font">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className='section-heading'>
                <h2 className="magic-club-font">
                  ATIVIDADES <strong className="magic-club-font magic-club-subtitle">LÚDICAS</strong>
                  <br />
                </h2>
                <p className="text-white lead project-font lh-sm">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.

                  Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.3.

                  And 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                <p>
                  <img
                  style={{
                    
                  }}
                    src="img/games/magic-club/activities.png"
                    alt="Iris"
                    className="img-fluid"
                  />
                </p>
              </div>
            </div>
          </div>

        </div> : <ActivitiesMobile/>}
      </section>
    </>
  );
}

export default Activities;
