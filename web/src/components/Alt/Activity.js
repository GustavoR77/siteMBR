import React, { useState } from "react";
import _data from "../../data";
import BooksMobile from "./BooksMobile";

function Activity(props) {
  const background = props
  const [width, setWidth] = useState(window.innerWidth)

  return (
    <>
      {/* <section
        id="screenshots"
        className={"screenshots-section ptb-100 " + background.background}
  > */}
      <section
        className="screenshots-section ptb-100 "
        style={{
          backgroundImage: "url('img/games/alt/background-blue.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
        }}
      >
        {width > 768 ?
          <div className="container magic-club-font">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center">
                  <p>
                    <img
                      src="img/games/alt/activity-boy.png"
                      alt="Books"
                      className="img-fluid"
                    />
                  </p>

                </div>
              </div>
            </div>

          </div> : <BooksMobile />}
      </section>
    </>
  );
}

export default Activity;
