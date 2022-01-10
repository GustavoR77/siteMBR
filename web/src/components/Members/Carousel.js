import React, { useState } from 'react'
import _data from '../../data'

function Carousel(props) {
  const departments = props.data

  return (
    <div style={{ height: '0px'}}>
      <div className="" style={props.estilo}>
        {console.log('O que tem', departments)}
        <div className="owl-carousel owl-theme team-carousel">
          {(departments || []).map((member, index) => {
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
