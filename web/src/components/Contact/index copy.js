import React, { Component, useState } from 'react'
import _data from '../../data'

function Contact2() {

  const [department, setDepartment] = useState('admin');

  return (
    <>
      <section
        id="contact"
        className=
        'contact-us ptb-100 blue-gray2-bg'
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="section-heading">
                <h3>{_data.contact.title}</h3>
                <p>{_data.contact.description}</p>
              </div>
              <div className="footer-address">
                <h6>
                  <strong className='fw-bold'>{_data.contact.office}</strong>
                </h6>
                <p>{_data.contact.address}</p>
                <h6>
                  <strong className='fw-bold'>{_data.contact.officeFilial}</strong>
                </h6>
                <p>{_data.contact.adressFilial}</p>
                <ul>
                  <li>
                    <span>Telefone: {_data.contact.phone}</span>
                  </li>
                  <li>
                    <span>
                      Email :{' '}
                      <a href="mailto:hello@yourdomain.com">
                        {_data.contact.email}
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-7">
              <form
                method="POST"
                id="contactForm1"
                className="contact-us-form"
                onSubmit={setDepartment('')}
              >
                <h5>Preencha o formulário</h5>
                <div className="row">
                  <div className="col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Nome"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Telefone"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="company"
                        size="40"
                        className="form-control"
                        id="company"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows="7"
                        cols="25"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 mt-3">
                    <button
                      type="submit"
                      className="btn solid-btn"
                      id="btnContactUs"
                    >
                    </button>
                  </div>
                </div>
              </form>
              <p className="form-message"></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact2
