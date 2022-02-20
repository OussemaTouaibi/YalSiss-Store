import React, { useState, useEffect } from 'react'
import Slider from "react-slick"
import {  useDispatch } from 'react-redux'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import "../slider/1.css.map"
import "../slider/1.scss"
import { addItemToCart } from '../../../actions/cartActions'
import * as FaIcons from 'react-icons/fa';
import '../hero/Slider.scss'
import BtnSlider from '../hero/BtnSlider'
import dataSlider from '../hero/SliderData'

import { useAlert } from 'react-alert'


import MediaQuery from 'react-responsive';


const ImageSlider = ({match, product}) => {


    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1)

    const addToCart = () => {
        dispatch(addItemToCart(product._id, quantity));

    }
      
   
   
    return (

        <>
      <MediaQuery maxWidth={1224}>
              
                <div className="card" key={product.id} style={{height:"270px", backgroundColor:"#e6e6e6", border: "1px solid #000" }}>
           
                    <div className="card-image" >
                  
                    <img src={product.images[0].url} />
                    
                    
                    
                    </div>
                
                    <div className="details">
                    
                    
                    <h2><Link to= {`/product/${product._id}`} style={{color:'black' ,fontSize:'16px'}}>{product.name}</Link>
                    <h8 onClick={addToCart}><FaIcons.FaCartPlus/></h8>
                       <span className="job-title">{product.price}DT </span>
                       
                       </h2> 
                    
                     
                    </div>
                   
                </div>
                </MediaQuery>
                <MediaQuery minWidth={1224}>
              
              <div className="card" key={product.id} style={{height:"390px", backgroundColor:"#e6e6e6", border: "1px solid #000" }}>
         
                  <div className="card-image" >
                  
                  <img src={product.images[0].url} />
                  <button   
                    onClick={addToCart}> <h1><FaIcons.FaCartPlus/></h1> </button>
                  </div>
              
                  <div className="details">
                  
                  <h2><Link to= {`/product/${product._id}`} style={{color:'black' ,fontSize:'16px'}}>{product.name}  
                  
                  </Link>
                
                     <span className="job-title">{product.price}DT</span>  </h2>
                    
                  </div>
              </div>
              </MediaQuery>
                </>

    )
}

export default ImageSlider