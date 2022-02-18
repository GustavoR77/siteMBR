import React from 'react'

function Capacitation(props) {
  const background = props

  return (
    <>
      <section id="about" className={'about-us ptb-100 ' + background}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6">
              <div className="about-content-left section-heading">
                <h2>CAPACITAÇÃO COMPLETA</h2>
                <p>
                  Treinamos os professores para que compreendam melhor o bilinguismo e possam aproveitar ao máximo nossa metodologia.
                </p>
                <p>
                  <img
                    src="img/games/magic-club/capacitation.png"
                    alt="about us"
                    className="img-fluid"
                  />
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-content-right ml-5">
                <img
                  src="img/games/magic-club/capacitation2.png"
                  alt="about us"
                  className="img-fluid"
                />
              </div>
              <div className="about-content-right ml-5">
                <p>Vídeos tutoriais de preparação de
                  aulas que explicam, aula a aula, o que
                  o professor deve fazer.</p>
                <p>Assistência pedagógica completa
                  disponibilizada por diversos canais
                  para auxiliar em todo o processo de
                  implantação e, após esse momento, no
                  dia a dia do professor, auxiliando-o em todos os seus questionamentos.</p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Capacitation
