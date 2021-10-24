import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import "../slider/1.css.map"
import "../slider/1.scss"





const ImageSlider = ({ product, col }) => {

   
    return (


       
                <div className="card" key={product.id} style={{height:"300px", backgroundColor:"#e6e6e6"}}>
                    <div className="card-image" >
                    <img src={product.images[0].url} />
                    </div>
                
                    <div className="details">
                    <h2><Link to= {`/product/${product._id}`} style={{color:'black'}}>{product.name}</Link>
                       <span className="job-title">{product.price}DT</span></h2>
                    </div>
                </div>
    

    )
}

export default ImageSlider