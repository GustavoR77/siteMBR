import React, { useState, useEffect } from 'react'

function Step2Mobile(props) {
  const background = props

  const [width, setWidth] = useState(window.innerWidth)

  return (
    <>
      <div className="container magic-club-font">
        <div className="row align-items-center justify-content-between">
        <div className="col-md-6 text-center">
            <div className="about-content-center">
              <img
                src="img/games/kubets/step2.png"
                alt="about us"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="section-heading text-center">
              <div className="text-dark text-start p-3 lead project-font lh-same text-center">
                <p>
                O aluno vai passar por desafios e a cada desafio vencido ele evolui, mudando de nível.

O progresso ocorre dentro de um currículo espiral considerando o conhecimento prévio do aluno.
                </p>
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </>
  )
}

export default Step2Mobile
