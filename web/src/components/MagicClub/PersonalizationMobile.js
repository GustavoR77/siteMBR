import React, { useState } from "react";

function PersonalizationMobile(props) {
  const background = props
  const [width, setWidth] = useState(window.innerWidth)

  return (
    <>
      <div className="container magic-club-font">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <div className="text-center section-heading h2-mobile-magicclub">
              <h2 className='magic-club-font magic-club-subtitle'>PERSONALIZAÇÃO</h2>
              <p className="text-white lead project-font lh-sm">
                Personalizamos a carga horária e a capa do material com o logotipo de sua cidade e nome do projeto educativo quando houver.
              </p>
              <p>
                <img
                  src="img/games/magic-club/personalization3.png"
                  alt="about us"
                  className="img-fluid"
                />
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-content-right">
              <img
                src="img/games/magic-club/personalization4.png"
                alt="about us"
                className="img-fluid"
              />
            </div>
            {/* 
              <div className="about-content-right ml-5">
                <img
                  src="img/games/magic-club/personalization2.png"
                  alt="about us"
                  className="img-fluid"
                />
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalizationMobile
