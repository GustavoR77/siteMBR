import React from 'react'

function HeroSection() {
  return (
    <>
      <section
        className="hero-section background-img"
        style={{
          backgroundImage: "url('img/logo_mbr_tecnologia_educacional.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
        }}
      >
        <div className="video-section-wrap">
          <div className="background-video-overly ptb-100">
            <div
              className="player"
              data-property="{videoURL:'https://www.youtube.com/watch?v=zbVuoVLZd6U',containment:'.video-section-wrap', quality:'highres', autoPlay:true, showControls: false, startAt:0, mute:true, opacity: 1}"
            ></div>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-8 col-lg-7">
                  <div className="hero-content-left text-white text-center mt-5 ptb-100">
                    <h1 className="text-white">MBR</h1>
                    <p className="lead">Há 20 anos no mercado tecnológico </p>

                    <a
                      href="#contact"
                      className="btn google-play-btn page-scroll"
                    >
                      Venha nos conhecer melhor
                    </a>
                  </div>
                </div>
              </div>

              <div className="row justify-content-between">
                <div className="col-md-12">
                  <div className="client-section-wrap d-flex flex-row align-items-center">
                    <p className="lead mr-5 mb-0 text-white">
                      Nossos parceiros:
                    </p>
                    <ul className="list-inline justify-content-between">
                      <li className="list-inline-item">
                        <img
                          src="img/parceiros/logo_fisk.png"
                          alt="FISK"
                          className="img-fluid"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          src="img/parceiros/logo_adalpha.png"
                          alt="Adalpha"
                          width="100"
                          className="img-fluid"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          src="img/parceiros/logo_grow.png"
                          alt="Grow"
                          width="100"
                          className="img-fluid"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          src="img/parceiros/logo_omg.png"
                          alt="OMG"
                          width="100"
                          className="img-fluid"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          src="img/parceiros/logo_pbf.png"
                          alt="PBF"
                          width="100"
                          className="img-fluid"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          src="img/parceiros/logo_roma.png"
                          alt="Roma"
                          width="100"
                          className="img-fluid"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          src="img/parceiros/logo_dom_da_arte.png"
                          alt="Dom da Arte"
                          width="100"
                          className="img-fluid"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          src="img/parceiros/logo_farma_ponte_kids.png"
                          alt="Farma Ponte Kids"
                          width="100"
                          className="img-fluid"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          src="img/parceiros/logo_ferinhas.png"
                          alt="Ferinhas"
                          width="100"
                          className="img-fluid"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          src="img/parceiros/logo_franco.png"
                          alt="Franco"
                          width="100"
                          className="img-fluid"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
