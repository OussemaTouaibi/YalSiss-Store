import React from 'react';
import { Link } from 'react-router-dom';

import './product2.scss';

import MediaQuery from 'react-responsive';


const Product2 = ({ product, col }) => {
return (
    <>
    
    <MediaQuery maxWidth={1224}>
   
        <div className="cardz" key={product.id} style={{flex: "1 0 100%"}}>
            <div className="cardz_img">
                <img src={product.images[0].url} />
            </div>
            <div className="cardz_header">
           
                <h2 className = "cardd-title">
               
                <Link to= {`/product/${product._id}`} >{product.name}</Link>
                    </h2>
                <div className = "ratings mt-auto">
              <div className = "rating-outer">
              <div className = "rating-inner" style={{width: `${(product.ratings / 5) * 100}%`}}>
                    </div>
                </div>
                <span id = "no_of_reviews">({product.numOfRev} Reviews)</span>
              </div>
                <p>{product.description}</p>
                <p className="price">{product.price}<span>DT</span></p>
                <Link to= {`/product/${product._id}`} id = "view_btn" className = "btnz">View Details</Link>
            </div>
            </div>
 
            </MediaQuery>

<MediaQuery minWidth={1224}>

    <div className="cardz" key={product.id}  style={{flex: "1 0 21%"}}>
        <div className="cardz_img">
            <img src={product.images[0].url} />
        </div>
        <div className="cardz_header">
       
            <h2 className = "cardd-title">
           
            <Link to= {`/product/${product._id}`} >{product.name}</Link>
                </h2>
            <div className = "ratings mt-auto">
          <div className = "rating-outer">
          <div className = "rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}>
                </div>
            </div>
            <span id = "no_of_reviews">({product.numOfRev} Reviews)</span>
          </div>
            <p>{product.description}</p>
            <p className="price">{product.price}<span>DT</span></p>
            <Link to= {`/product/${product._id}`} id = "view_btn" className = "btnz">View Details</Link>
        </div>
        </div>

        </MediaQuery>
        </>
    )
}


export default Product2;
