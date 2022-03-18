import React, { useState, useEffect } from 'react'

function Step1Mobile(props) {
  const background = props

  const [width, setWidth] = useState(window.innerWidth)

  return (
    <>
      <div className="container magic-club-font">
        <div className="row align-items-center justify-content-between">
        <div className="col-md-6 text-center">
            <div className="about-content-center">
              <img
                src="img/games/kubets/step1-mobile.png"
                alt="about us"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="section-heading text-center">
              <div className="text-white text-start p-3 lead project-font lh-same text-center">
                <p>
                Visando a educação plena do estudante, o jogo instiga o desenvolvimento de outras competências, como disciplina, higiene, saúde, gestão do lar e administração das finanças.
                </p>
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </>
  )
}

export default Step1Mobile
