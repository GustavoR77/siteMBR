import React, { useState } from "react";
import Wave from 'react-wavify'

function Gamefication(props) {
  const background = props
  return (
    <>
      <section
        className="screenshots-section ptb-100 "
        style={{
          backgroundImage: "url('img/games/magic-club/background-purple.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: '100% 110%',
        }}
      >
        
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
      </section>
    </>
  );
}

export default Gamefication;
