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
                  color: '#E96365',
                  fontSize: '4rem',
                }}>ALT</h2>
                  <div className="text-dark text-start p-3 lead project-font lh-same">
                    <p>
                      ALT é um jogo pedagógico criado pela MBR Tecnologia
                      Educacional, direcionado à alfabetização que contempla a
                      inclusão de alunos, integrando o ambiente escolar na mesma
                      tarefa metodológica, para um aprendizado conjunto e
                      divertido.
                    </p>
                    <p>
                      É um software que consolida a alfabetização nas escolas
                      regulares e inclusivas, com atividades e estímulos que
                      atendem as necessidades de todos os alunos. O ALT traz a
                      tecnologia a favor de uma inclusão funcional que atende as
                      necessidades desde a Educação Infantil, Ensino Fundamental
                      ao EJA, ampliando através das atividades os
                      desenvolvimentos necessários para uma alfabetização
                      completa e eficaz.
                    </p>
                    <p>
                      As gerações avançam e com elas as formas de conexões. Os
                      alunos se beneficiam com as ferramentas do software, que
                      além de trazer conteúdo para a alfabetização, traz também
                      estratégias para a comunicação, expressão e aquisição de
                      conhecimentos gerais.
                    </p>
                    <p>
                      ALT é a evolução para uma educação igualitária,
                      facilitando a inclusão dos alunos com atividades que
                      conectam todos através de seus recursos.
                    </p>
                  </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-content-center">
              <img
                src="img/games/alt/about-mobile.png"
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
