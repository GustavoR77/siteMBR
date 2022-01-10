import React, { useState } from 'react'
import _data from '../../data'

function Carousel(props) {
  const admins = props.data

  return (
    <div style={{ height: '0px'}}>
      <div className="" style={props.estilo}>
        {console.log(admins)}
        <div className="owl-carousel owl-theme team-carousel">
          {(admins || []).map((member, index) => {
            return (
              <div className="item single-client" key={index}>
                <img src={member} alt="client logo" className="client-img" />
                <p>Texto</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Carousel
