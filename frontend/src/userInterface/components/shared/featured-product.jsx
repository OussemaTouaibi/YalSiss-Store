import React from 'react'
import './featured-product.scss'


const FeaturedProduct = (product) => {
    const {title, imageUrl, price } = product;

    return (
        <div className='featured-product'>
            <div className='featured-image'>
                <img src={imageUrl} alt='image of a product' />
            
            </div>
            <div className='name-price'>
                <h3> {title} </h3>
                <p> {price}  DT</p>
           
                <button className='button is-black nomad-btn'>ADD TO CART</button>
                
            </div>
        </div>
    );
} 

export default FeaturedProduct;