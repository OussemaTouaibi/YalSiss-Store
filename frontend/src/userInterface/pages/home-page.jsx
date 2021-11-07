import React, { useState, useEffect }  from 'react'


import Layout from '../components/shared/layout'
import Sliderr from "react-slick";
import MetaData from '../components/shared/metaData';
import ImageSlider from "../components/slider/slider"
import Slider from '../components/hero/Slider'
import CardFooter from '../components/footer/cardfooter';
import {  useDispatch, useSelector } from 'react-redux'
import { getAdminProducts } from '../../actions/productActions'
import { Link } from 'react-router-dom'

import MediaQuery from 'react-responsive';

const Homepage = () => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        cssEase: "linear",
        
    }

    let setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: "linear"
   
    }
    const { user, isAuthenticated, Loading } =  useSelector(state =>state.auth)
    
    const dispatch = useDispatch();
   
    
   
    const { loading, products } = useSelector(state => state.products)

    useEffect(() => {

    
        dispatch(getAdminProducts());

      
        
    
      }, [dispatch])


    
    const listProducts=[]
      
    for  (var product of products){
        listProducts.push(product)
        
    }
      
  
    
    const listproducts = listProducts.filter(product => product.category ===  "612fa1616f5fa653cc033abb" );
    const listproductss = listProducts.filter(product => product.category ===  "612b9665627914423437dd0f" );
    const listproductsss = listProducts.filter(product => product.category ===  "612fa1a56f5fa653cc033b26" );
    const listproduct = listProducts.filter(product => product.category ===  "6161c2dddb3bab328c098da6" );
    const listproducte = listProducts.filter(product => product.category ===  "612fa33f6f5fa653cc033b6e" );





    return(
      
        <Layout>
            
        <Slider />
           
            <MetaData title={'Buy Best Products Online'} />
            <MediaQuery minWidth={1224}>
            <div className="title" style={{border: "1px solid #000" , marginTop:"1rem"}}>
            <h2><Link to= {'/category/vetements-homme'}  style={{color:'black', fontFamily:"Brush Script MT"}}>Men Clothing</Link></h2>
          
          
           <Sliderr {...settings}>
           
            {listproducts && listproducts.map( product =>(
                <div className="card-wrapper"  >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
    <h2><Link to= {'/category/vetements-femme'}  style={{color:'black', fontFamily:"Brush Script MT"}}>Women Clothing</Link></h2>
       
          
           <Sliderr {...settings}>
           
            {listproductss && listproductss.map( product =>(
                <div className="card-wrapper" >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
    <h2><Link to= {'/category/telephones-and-tablettes'}  style={{color:'black', fontFamily:"Brush Script MT"}}>Phones</Link></h2>

          
           <Sliderr {...settings}>
           
            {listproductsss && listproductsss.map( product =>(
                <div className="card-wrapper" >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    
    </div>
    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
    <h2><Link to= {'/category/watches'}  style={{color:'black', fontFamily:"Brush Script MT"}}>Watches</Link></h2>
           
          
           <Sliderr {...settings}>
           
            {listproduct && listproduct.map( product =>(
                <div className="card-wrapper" >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
    <h2><Link to= {'/category/parfums'}  style={{color:'black', fontFamily:"Brush Script MT"}}>Parfums</Link></h2>
           
          
           <Sliderr {...settings}>
           
            {listproducte && listproducte.map( product =>(
                <div className="card-wrapper">
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
</MediaQuery>

<MediaQuery maxWidth={1224} >
<div className="title"  style={{border: "1px solid #778899" , marginTop:"1rem"}}>
            <h2><Link to= {'/category/vetements-homme'}  style={{color:'black' , fontSize:"27px", fontFamily:"Brush Script MT"}}>Men Clothing</Link></h2>
       
          
           <Sliderr {...setting}>
           
            {listproducts && listproducts.map( product =>(
                <div className="card-wrapper" >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
    <h2><Link to= {'/category/vetements-femme'}  style={{color:'black' , fontSize:"27px", fontFamily:"Brush Script MT"}}>Women Clothing</Link></h2>
         
          
           <Sliderr {...setting}>
           
            {listproductss && listproductss.map( product =>(
                <div className="card-wrapper" >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
    <h2><Link to= {'/category/telephones-and-tablettes'}  style={{color:'black' , fontSize:"27px", fontFamily:"Brush Script MT"}}>Phones</Link></h2>

          
          
           <Sliderr {...setting}>
           
            {listproductsss && listproductsss.map( product =>(
                <div className="card-wrapper" >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
    <h2><Link to= {'/category/watches'}  style={{color:'black' , fontSize:"27px", fontFamily:"Brush Script MT"}}>Watches</Link></h2>
       
          
           <Sliderr {...setting}>
           
            {listproduct && listproduct.map( product =>(
                <div className="card-wrapper" >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
    <h2><Link to= {'/category/parfums'}  style={{color:'black', fontSize:"27px", fontFamily:"Brush Script MT"}}>Parfums</Link></h2>
        
          
           <Sliderr {...setting}>
           
            {listproducte && listproducte.map( product =>(
                <div className="card-wrapper">
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
</MediaQuery>
    
 
 
            {!Loading && (!isAuthenticated || user.role !== 'admin') && (
         
                < CardFooter />
           
            )}
        </Layout>
    )
}

export default Homepage;