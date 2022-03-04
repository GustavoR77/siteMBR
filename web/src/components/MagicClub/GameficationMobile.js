import React, { useState } from "react";

function Gamefication(props) {
  const background = props
  return (
    <>        
        <div className="container magic-club-font">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center">
                <h2 className="magic-club-font magic-club-subtitle">
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
    </>
  );
}

export default Gamefication;
