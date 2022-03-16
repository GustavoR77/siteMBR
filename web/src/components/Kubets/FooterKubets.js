import React, { useState, useEffect } from 'react'

function Footer() {

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => { }, [window.innerWidth])

  return (
    <>
      <section
        className="p-5 white-bg"
        style={{
          backgroundImage: "url('img/games/kubets/background-footer.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
        }}
      >
        <footer className="footer-section text-center">

          <div className="container ">
            <div className="row justify-content-between ">
              <div className="col-lg-3 mb-3 mb-lg-0 ">
                <div className="footer-nav-wrap text-white">
                  <img
                    src="img/Logo_MBR-white.png"
                    alt="footer logo"
                    width="120"
                    className="img-fluid mb-3"
                  />
                  {width > 768 ?
                    <p>
                      Há 25 anos inovando a educação com o melhor da
                      tecnologia para gerar uma experiência de aprendizagem
                      única.
                    </p> : <p />}
                </div>
              </div>
              <div className="col-lg-3 ml-auto mb-4 mb-lg-0">
                <div className="footer-nav-wrap text-white">
                  <h5 className="mb-3 footer-column text-white">Outros Links</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <a href="/#">Sobre Nós</a>
                    </li>
                    <li className="mb-2">
                      <a href="/#">Contato</a>
                    </li>
                  </ul>
                  <div className="social-list-wrap">
                    <ul className="social-list list-inline list-unstyled">
                      <li className="list-inline-item">
                        <a href="https://www.facebook.com/Mbrtecnologiaeducacional" target="_blank" title="Facebook">
                          <span className="ti-facebook"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.instagram.com/mbrtecnologiaeducacional/" target="_blank" title="Instagram">
                          <span className="ti-instagram"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.facebook.com/Mbrplay" target="_blank" title="Facebook">
                          <span className="ti-facebook"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.instagram.com/mbrplay/" target="_blank" title="Instagram">
                          <span className="ti-instagram"></span>
                        </a>
                      </li>{/*
                        <li className="list-inline-item">
                          <a href="/#" target="_blank" title="Twitter">
                            <span className="ti-twitter"></span>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="/#" target="_blank" title="printerst">
                            <span className="ti-pinterest"></span>
                          </a>
                        </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 ml-auto mb-4 mb-lg-0">
                <div className="footer-nav-wrap text-white">
                  <h5 className="mb-3 footer-column text-white">Suporte</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <span className="ti-location-pin mr-2"></span>
                      Tietê-SP
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-phone-square mr-2 fa-lg"></i>
                      <a href="tel:+5515996463919">
                        {' '}
                        &nbsp;&nbsp;+55 15 3282-3919
                      </a>
                    </li>
                    <li className="mb-2">
                      <i className="fab fa-whatsapp mr-2 fa-lg"></i>
                      <a href="https://wa.me/5515996463919" target="_blank">
                        {' '}
                        +55 15 99646-3919
                      </a>
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-mail-bulk mr-2"></i>
                      <a href="mailto:rh@mbr.net.br"> rh@mbr.net.br</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="footer-nav-wrap text-white">
                  <h5 className="mb-3 footer-column text-white">Localização</h5>
                  <div className="embed-responsive embed-responsive-4by3">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.8363953627027!2d-47.71841938498818!3d-23.103084150713098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c612798f987d17%3A0x8af1759a64c5940f!2sMBR%20-%20Tecnologia%20Educacional!5e0!3m2!1sen!2sbr!4v1638791194472!5m2!1sen!2sbr"
                      allowFullScreen=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<div className="footer-bottom mt-5 mb-0">
            <div className="container">
              <div className="row text-center justify-content-center">
                <div className="col-md-6 col-lg-5">
                  <p className="copyright-text">
                    Copyrights © 2019.
                  </p>
                </div>
              </div>
            </div>
          </div> */}



        </footer>
      </section>
    </>
  )
}

export default Footer
