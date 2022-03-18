import React, { useState, useEffect } from 'react'

function AboutAltMobile(props) {
  const background = props

  const [width, setWidth] = useState(window.innerWidth)

  return (
    <>
      <div className="container magic-club-font">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <div className="section-heading text-center">
              <h2 className='text-dark magic-club-font' style={{ fontSize: '2.5rem' }}>Jogo pedagógico</h2>
              <h2 className='magic-club-subtitle magic-club-font'
                style={{
                  color: '#4A79BC',
                  fontSize: '4rem',
                }}>KUBETS</h2>
              <div className="text-dark text-start p-3 lead project-font lh-same text-center">
                <p>
                  Kubets é um jogo pedagógico criado
                  pela MBR Tecnologia Educacional,
                  direcionado a estudantes da rede pública de ensino do 1º ao 5º ano do Ensino Fundamental 1.
                </p>
                <p>
                  Por meio da lucidade, da interação com a tecnologia e do protagonismo do estudante, o jogo contribui para o processo de ensino - aprendizagem do componente curricular da Língua Portuguesa, mais especificamente, podendo ainda assim trabalhar de forma multi-disciplinar.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div className="about-content-center">
              <img
                src="img/games/kubets/about.png"
                alt="about us"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutAltMobile
