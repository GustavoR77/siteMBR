import React, { useState, useEffect } from 'react'

function Step3Mobile(props) {
  const background = props

  const [width, setWidth] = useState(window.innerWidth)

  return (
    <>
      <div className="container magic-club-font">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6 text-center">
            <div className="about-content-center">
              <img
                src="img/games/kubets/step3.png"
                alt="about us"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="section-heading text-center">
              <div className="text-dark text-start p-3 lead project-font lh-same text-center">
                <p>
                  O software inicia com a alfabetização e vai passando por temas relacionados à língua portuguesa dentro das expectativas que temos na base em relação ao componente de Língua Portuguesa.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Step3Mobile
