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
        cssEase: "linear"
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
            <div className="title">
            <h2><Link to= {'/category/vetements-homme'}  style={{color:'black', textDecoration: "underline"}}>Men</Link></h2>
           </div>
          
           <Sliderr {...settings}>
           
            {listproducts && listproducts.map( product =>(
                <div className="card-wrapper" >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    <div className="title" >
    <h2><Link to= {'/category/vetements-femme'}  style={{color:'black', textDecoration: "underline"}}>women</Link></h2>
           </div>
          
           <Sliderr {...settings}>
           
            {listproductss && listproductss.map( product =>(
                <div className="card-wrapper" >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>

    <div className="title">
    <h2><Link to= {'/category/telephones-and-tablettes'}  style={{color:'black', textDecoration: "underline"}}>Phones</Link></h2>

           </div>
          
           <Sliderr {...settings}>
           
            {listproductsss && listproductsss.map( product =>(
                <div className="card-wrapper" >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    <div className="title">
    <h2><Link to= {'/category/watches'}  style={{color:'black', textDecoration: "underline"}}>Watches</Link></h2>
           </div>
          
           <Sliderr {...settings}>
           
            {listproduct && listproduct.map( product =>(
                <div className="card-wrapper" >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>

    <div className="title">
    <h2><Link to= {'/category/parfums'}  style={{color:'black', textDecoration: "underline"}}>Parfums</Link></h2>
           </div>
          
           <Sliderr {...settings}>
           
            {listproducte && listproducte.map( product =>(
                <div className="card-wrapper">
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>

</MediaQuery>

<MediaQuery maxWidth={1224}>
<div className="title">
            <h2><Link to= {'/category/vetements-homme'}  style={{color:'black', textDecoration: "underline"}}>Men</Link></h2>
           </div>
          
           <Sliderr {...setting}>
           
            {listproducts && listproducts.map( product =>(
                <div className="card-wrapper" >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    <div className="title" >
    <h2><Link to= {'/category/vetements-femme'}  style={{color:'black', textDecoration: "underline"}}>women</Link></h2>
           </div>
          
           <Sliderr {...setting}>
           
            {listproductss && listproductss.map( product =>(
                <div className="card-wrapper" >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>

    <div className="title">
    <h2><Link to= {'/category/telephones-and-tablettes'}  style={{color:'black', textDecoration: "underline"}}>Phones</Link></h2>

           </div>
          
           <Sliderr {...setting}>
           
            {listproductsss && listproductsss.map( product =>(
                <div className="card-wrapper" >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    <div className="title">
    <h2><Link to= {'/category/watches'}  style={{color:'black', textDecoration: "underline"}}>Watches</Link></h2>
           </div>
          
           <Sliderr {...setting}>
           
            {listproduct && listproduct.map( product =>(
                <div className="card-wrapper" >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>

    <div className="title">
    <h2><Link to= {'/category/parfums'}  style={{color:'black', textDecoration: "underline"}}>Parfums</Link></h2>
           </div>
          
           <Sliderr {...setting}>
           
            {listproducte && listproducte.map( product =>(
                <div className="card-wrapper">
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
</MediaQuery>
    
 
 
            {!Loading && (!isAuthenticated || user.role !== 'admin') && (
         
                < CardFooter />
           
            )}
        </Layout>
    )
}

export default Homepage;