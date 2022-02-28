import React from 'react'
import Wave from 'react-wavify'

function About(props) {
  const background = props

  return (
    <>
      <section id="about" className={'about-us ptb-100 ' + background.background}>
        <div className="container magic-club-font">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6">
              <div className="about-content-left section-heading">
                <h2 className='text-dark magic-club-font'>SISTEMA BILÍNGUE</h2>
                <h2 className='magic-club-subtitle magic-club-font'>MAGIC CLUB</h2>
                <p className='text-dark lead'>
                  O MAGIC CLUB é um Sistema de Ensino Bilíngue para alunos dos anos iniciais do Ensino Fundamental, desenvolvido pela MBR Tecnologia Educacional, uma EdTech com 23 anos de atuação no mercado
                  educacional brasileiro e em outros 12 países.


                  Chamamos de sistema de ensino, pois
                  unimos toda a experiência da MBR com
                  o que há de mais moderno e eficiente
                  em metodologias para o aprendizado de
                  idiomas. Isso tudo com o único propósito de capacitar os alunos a falarem inglês fluentemente.
                  {' '}
                </p>
                <p>
                  <img
                    src="img/games/magic-club/about2.png"
                    alt="about us"
                    className="img-fluid"
                  />
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-content-right ml-5">
                <img
                  src="img/games/magic-club/about.png"
                  alt="about us"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default About
