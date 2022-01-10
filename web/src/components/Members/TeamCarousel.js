import React, { useState, useEffect } from 'react'
import _data from '../../data'
import Carousel from './Carousel'

function TeamCarousel() {
  const [department, setDepartment] = useState('admin')

  useEffect(() => {}, [department])

  return (
    <>
      <section id="teammembers" className="client-section ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center mb-5 ">
                <h2 className="mb-5">Nosso Time</h2>

                <div className="d-flex justify-content-around">
                  <a>
                    <h5
                      className={
                        department === 'admin'
                          ? 'a-teammembers opacity-100 '
                          : 'opacity-50'
                      }
                      onClick={() => setDepartment('admin')}
                    >
                      Administrativo
                    </h5>
                  </a>
                  <a>
                    <h5
                      className={
                        department === 'arts'
                          ? 'a-teammembers opacity-100'
                          : 'opacity-50'
                      }
                      onClick={() => setDepartment('arts')}
                    >
                      Design
                    </h5>
                  </a>
                  <a>
                    <h5
                      className={
                        department === 'developers'
                          ? 'a-teammembers opacity-100'
                          : 'opacity-50'
                      }
                      onClick={() => setDepartment('developers')}
                    >
                      Developer
                    </h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-5">
            <div className="col-md-12 mb-5">
              <Carousel
                estilo={{
                  opacity: department === 'admin' ? '1' : '0',
                  height: department === 'admin' ? '1' : '0',
                  transition: 'opacity 1s linear',
                }}
                data={_data.teamMembersAdmins.members}
              />
              <Carousel
                estilo={{
                  opacity: department === 'developers' ? '1' : '0',
                  height: department === 'developers' ? '1' : '0',
                  transition: 'opacity 1s linear',
                }}
                data={_data.teamMembersDevelopers.members}
              />
              <Carousel
                estilo={{
                  opacity: department === 'arts' ? '1' : '0',
                  height: department === 'arts' ? '1' : '0',
                  transition: 'opacity 1s linear',
                }}
                data={_data.teamMembersDesigners.members}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamCarousel
