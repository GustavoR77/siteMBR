import React, { useState } from 'react'
import _data from '../../data'

function Carousel(props) {
  const departments = props.data

  return (
    <div className="" style={{ height: '0px' }}>
      <div className="" style={props.estilo}>
        <div className="owl-carousel owl-theme team-carousel">
          {(departments || []).map((member, index) => {
            return (
              <div className="item single-client" key={index}>
                <img
                  src={member.img}
                  alt={member.name}
                  className="client-img"
                />
                <p className="mt-2">{member.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Carousel
