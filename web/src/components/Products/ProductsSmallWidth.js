import React, { useState, useEffect } from 'react'
import _data from '../../data'

function ProductsSmallWidth() {
  const [products, setProducts] = useState(_data.products)

  useEffect(() => {}, [products])

  console.log(products)

  return (
    <>
      <div className="screen-slider-content">
        <div className=""></div>
        <div className="screen-carousel owl-carousel owl-theme dot-indicator">
          {(products.productsList || []).map((product, index) => {
            return (
              <div className="screen-carousel-single">
                <img
                  src={product.image}
                  className="img-fluid"
                  alt={product.designation}
                  width="600"
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ProductsSmallWidth
