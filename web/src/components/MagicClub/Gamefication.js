import React, { useState } from "react";
import _data from "../../data";

function Gamefication(props) {
  const background = props
  return (
    <>
      <section
        id="screenshots"
        className={"screenshots-section ptb-100 " + background}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center">
                <h2>
                GAMEFICAÇÃO
                  <br />
                </h2>
                <p className="lead">
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                </p>
                <p>
                <img
                      src="img/games/magic-club/gamification.png"
                      alt="Iris"
                      className="img-fluid"
                    />
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Gamefication;
