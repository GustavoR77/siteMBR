import React, { useState } from "react";
import PersonalizationMobile from './PersonalizationMobile'

function Personalization(props) {
  const background = props
  const [width, setWidth] = useState(window.innerWidth)

  return (
    <>
      <section
        className="screenshots-section ptb-100 "
        style={{
          backgroundImage: "url('img/games/magic-club/background-darkblue.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
        }}
      >
        {width > 768 ?
          <div className="container magic-club-font">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6">
                <div className="about-content-left section-heading">
                  <h2 className='magic-club-font magic-club-subtitle'>PERSONALIZAÇÃO</h2>
                  <p className="lead">
                    Personalizamos a carga horária e a capa do material com o logotipo de sua cidade e nome do projeto educativo quando houver.
                  </p>
                  <p>
                    <img
                      src="img/games/magic-club/personalization.png"
                      alt="about us"
                      className="img-fluid"
                    />
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-content-right ml-5">
                  <img
                    src="img/games/magic-club/celular.png"
                    alt="about us"
                    className="img-fluid"
                  />
                </div>
                <div className="about-content-right ml-5">
                  <img
                    src="img/games/magic-club/personalization2.png"
                    alt="about us"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div> : <PersonalizationMobile />}
      </section>
    </>
  )
}

export default Personalization
