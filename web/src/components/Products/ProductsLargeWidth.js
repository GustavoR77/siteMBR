import React, { useState, useEffect } from 'react'
import _data from '../../data'

function ProductsLargeWidth() {
  const [products, setProducts] = useState(_data.products)

  useEffect(() => {}, [products])
  
  return (
    <>
      <div className="row product-row">
        {(products.productsList || []).map((product, index) => {
          return (
            <div className="col-lg-3 col-sm-6 mt-4" key={index}>
              <div className="single-team-product position-relative">
                <div className="team-image">
                  <img
                    src={product.image}
                    alt="Team productsList"
                    className="img-fluid product-rounded p-2"
                  />
                </div>
                <div className="team-info text-white d-flex product-rounded flex-column align-items-center justify-content-center">
                  <h5 className="mb-0">{product.name}</h5>
                  <h6>{product.designation}</h6>
                  <ul className="list-inline team-social social-icon mt-4 text-white">
                    <li className="list-inline-item">
                      <a href="/#">
                        <span className="ti-facebook"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#">
                        <span className="ti-twitter"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#">
                        <span className="ti-github"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#">
                        <span className="ti-dribbble"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ProductsLargeWidth
