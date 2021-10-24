import React from 'react'
import { Link } from 'react-router-dom'


const Product = ({ product, col  }) => {
        return (
            <div className ={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
                  <div className = "cardd p-3 rounded">
            <img
              className = "cardd-img-top mx-auto"
              src= {product.images[0].url}
              alt= "product-img"
            />
            <div className = "cardd-body d-flex flex-column">
            <h5  className = "cardd-title">
            <Link to= {`/product/${product._id}`} >{product.name}</Link>
              </h5>
              <div className = "ratings mt-auto">
              <div className = "rating-outer">
              <div className = "rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}>
                    </div>
                </div>
                <span id = "no_of_reviews">({product.numOfRev} Reviews)</span>
              </div>
              <p className = "cardd-text">{product.price} DT</p>
              <Link to= {`/product/${product._id}`} id = "view_btn" className = "btn btn-block">View Details</Link>
            </div>
          </div>
        </div>
        )
    
}

export default Product
