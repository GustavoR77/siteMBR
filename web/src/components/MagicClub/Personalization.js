import React from 'react'

function Personalization(props) {
  const background = props

  return (
    <>
      <section id="about" className={'about-us ptb-100 ' + background}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6">
              <div className="about-content-left section-heading">
                <h2>PERSONALIZAÇÃO</h2>
                <p>
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
        </div>
      </section>
    </>
  )
}

export default Personalization
