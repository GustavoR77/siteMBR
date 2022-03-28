import React, { useState, useEffect } from "react";

function FooterMobile(props) {
  const mobile = props.mobile;
  const border = props.border;
  return (
    <>
      <section
        className={"p-5 " + border}
        style={{
          backgroundImage: mobile,
          backgroundColor: mobile,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "100% 100%",
        }}
      >
      <footer className="footer-section text-center">
        <div className="container ">
          <div className="row justify-content-between ">
            <div className="col-lg-3 mb-1 mb-lg-0 ">
              <div className="footer-nav-wrap text-white">
                <img
                  src="img/Logo_MBR-white.png"
                  alt="footer logo"
                  width="120"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-3 ml-auto mb-4 mb-lg-0">
              <div className="footer-nav-wrap text-white">
                <h5 className="mb-3 footer-column text-white">Sobre Nós</h5>
                <ul className="list-unstyled"></ul>
                <div className="social-list-wrap mt-3">
                  <ul className="social-list list-inline list-unstyled">
                    <li className="list-inline-item">
                      <a
                        href="https://www.instagram.com/mbrtecnologiaeducacional/"
                        target="_blank"
                        title="Instagram"
                      >
                        <span className="ti-instagram"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.facebook.com/Mbrtecnologiaeducacional"
                        target="_blank"
                        title="Facebook"
                      >
                        <span className="ti-facebook"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      @mbrtecnologiaeducacional
                    </li>
                  </ul>
                </div>
                <div className="social-list-wrap mt-2">
                  <ul className="social-list list-inline list-unstyled">
                    <li className="list-inline-item">
                      <a
                        href="https://www.instagram.com/mbrplay/"
                        target="_blank"
                        title="Instagram"
                      >
                        <span className="ti-instagram"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.facebook.com/Mbrplay"
                        target="_blank"
                        title="Facebook"
                      >
                        <span className="ti-facebook"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">@mbrplay</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 ml-auto mb-4 mb-lg-0">
              <div className="footer-nav-wrap text-white">
                <h5 className="mb-3 footer-column text-white">Contato</h5>
                <ul className="list-unstyled">
                  {/* <li className="mb-2">
                    <span className="ti-location-pin mr-2"></span>
                    Tietê-SP
  </li> */}
                  <li className="mb-2">
                    <i className="fas fa-phone-square mr-2 fa-lg icon-rotate icon-flipped"></i>
                    <a href="tel:+5515996463919">
                      {" "}
                      &nbsp;&nbsp;+55 15 3282-3919
                    </a>
                  </li>
                  <li className="mb-2">
                    <i className="fab fa-whatsapp mr-2 fa-lg"></i>
                    <a href="https://wa.me/5515996463919" target="_blank">
                      {" "}
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
                <a className="" href="https://goo.gl/maps/DvBU4FftrNYDCKmg8">
                  <h5 className="footer-column text-white">Localização</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </section>
    </>
  );
}

export default FooterMobile;
