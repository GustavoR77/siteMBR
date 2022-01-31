import React, { useState, useEffect } from 'react'
import _data from '../../data'
import ProductsLargeWidth from './ProductsLargeWidth'
import ProductsSmallWidth from './ProductsSmallWidth'

function Products() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {}, [window.innerWidth])

  return (
    <>
      <section id="team" className="team-product-section ptb-100">
        <div className="container-fluid">
          <div className="row justify-content-around">
            <div className="col-lg-7 col-md-8">
              <div className="section-heading text-center mb-5">
                <h2>Nossos produtos físicos</h2>
                <p className="lead">
                  O melhor da tecnologia para a educação nas escolas.
                </p>
              </div>
            </div>
          </div>
          {width > 768 ? <ProductsLargeWidth /> : <ProductsSmallWidth />}
        </div>
      </section>
    </>
  )
}

export default Products
