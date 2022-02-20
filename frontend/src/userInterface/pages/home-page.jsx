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
import '../components/hero/Slider.scss'
import BtnSlider from '../components/hero/BtnSlider'

import leftArrow from "../components/hero/icons/left-arrow.svg";
import rightArrow from "../components/hero/icons/right-arrow.svg";


import dataSlider from '../components/hero/SliderData'

import MediaQuery from 'react-responsive';





const Homepage = (match) => {

    
      

    const [slideIndex, setSlideIndex] = useState(1)

    function SampleNextArrow(props) {
       
        const {  onClick } = props;
        return (
          <div  onClick={onClick}>
            <button className="btn-slide next">
            <img src={rightArrow} />
          </button>
          </div>
          
        );
      }

     

    
    



const nextSlide = () => {
    if(slideIndex !== dataSlider.length){
        setSlideIndex(slideIndex + 1)
    } 
    else if (slideIndex === dataSlider.length){
        setSlideIndex(1)
    }

    
}
window.onload=nextSlide;

const prevSlide = () => {
    if(slideIndex !== 1){
        setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1){
        setSlideIndex(dataSlider.length)
    }
}

    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: "linear",
        arrows: true,
        nextArrow: <SampleNextArrow  />,
     
    }

    let setting = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: "linear",
        arrows: true,
        nextArrow: <SampleNextArrow  />,
        arrows : true,
      

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
    const listproductee = listProducts.filter(product => product.category ===  "61378ed5fc6d410470572671" );
    const listproducteee = listProducts.filter(product => product.category ===  "612fa3516f5fa653cc033b71" );
    const listproducteees = listProducts.filter(product => product.category ===  "612fa2376f5fa653cc033b45" );
    const listproducteeess = listProducts.filter(product => product.category ===  "612fa1f36f5fa653cc033b30" );
    const listproductr = listProducts.filter(product => product.category ===  "61c74c354d67570004d67dc9" );
    const listproductrr = listProducts.filter(product => product.category ===  "61c74e0f4d67570004d67e2e" );
    const listproducter = listProducts.filter(product => product.category ===  "612fa14c6f5fa653cc033aaf" );

    

    
    
    
    



    






    return(
      
        <Layout>
            
        <Slider />
           
            <MetaData title={'Buy Best Products Online'} />
            <MediaQuery minWidth={1224}>
            <h2><Link to= {'/category/vetements-homme'}  style={{color:'black', fontFamily:"Brush Script MT"}}>Men Clothing</Link></h2>

            <div className="title" style={{border: "1px solid #000" , marginTop:"1rem"}}>
            
            <div>
           <Sliderr {...settings}>
        
    
                
            {listproducts && listproducts.map( product =>(
               
                <div className="card-wrapper"  >
                  
           
         
       <ImageSlider key = {product._id}  product = {product} />

       </div>
 
 ))}

    </Sliderr>
    </div>

    </div>
    <h2><Link to= {'/category/vetements-femme'}  style={{color:'black', fontFamily:"Brush Script MT"}}>Women Clothing</Link></h2>

    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
       
          
           <Sliderr {...settings}>
           
            {listproductss && listproductss.map( product =>(
                <div className="card-wrapper" >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
    <h2><Link to= {'/category/vetements-enfant'}  style={{color:'black', fontFamily:"Brush Script MT"}}>Kids Clothing</Link></h2>

<div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
   
      
       <Sliderr {...settings}>
       
        {listproducter && listproducter.map( product =>(
            <div className="card-wrapper" >
   <ImageSlider key = {product._id}  product = {product} />
   </div>
))}

</Sliderr>
</div>

    
    <h2><Link to= {'/category/telephones-and-tablettes'}  style={{color:'black', fontFamily:"Brush Script MT"}}>Phones</Link></h2>

    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>

          
           <Sliderr {...settings}>
           
            {listproductsss && listproductsss.map( product =>(
                <div className="card-wrapper" >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    
    </div>
    <h2><Link to= {'/category/watches'}  style={{color:'black', fontFamily:"Brush Script MT"}}>Watches</Link></h2>

    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
           
          
           <Sliderr {...settings}>
           
            {listproduct && listproduct.map( product =>(
                <div className="card-wrapper" >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
    <h2><Link to= {'/category/parfums'}  style={{color:'black', fontFamily:"Brush Script MT"}}>Parfums</Link></h2>

    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
           
          
           <Sliderr {...settings}>
           
            {listproducte && listproducte.map( product =>(
                <div className="card-wrapper">
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
    

    <h2><Link to= {'/category/accesoires'}  style={{color:'black', fontFamily:"Brush Script MT"}}>Accessories</Link></h2>

    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
           
          
           <Sliderr {...settings}>
           
            {listproductee && listproductee.map( product =>(
                <div className="card-wrapper">
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>

    <h2><Link to= {'/category/maquillages'}  style={{color:'black', fontFamily:"Brush Script MT"}}>Make ups</Link></h2>

    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
           
          
           <Sliderr {...settings}>
           
            {listproducteee && listproducteee.map( product =>(
                <div className="card-wrapper">
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
    
    <h2><Link to= {'/category/decoration'}  style={{color:'black', fontFamily:"Brush Script MT"}}>Decoration</Link></h2>

    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
           
          
           <Sliderr {...settings}>
           
            {listproducteees && listproducteees.map( product =>(
                <div className="card-wrapper">
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
    <h2><Link to= {'/category/meubles'}  style={{color:'black', fontFamily:"Brush Script MT"}}>Furniture</Link></h2>

    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
           
          
           <Sliderr {...settings}>
           
            {listproducteeess && listproducteeess.map( product =>(
                <div className="card-wrapper">
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
    
    <h2><Link to= {'/category/ordinateurs-and-tvs'}  style={{color:'black', fontFamily:"Brush Script MT"}}>Computers</Link></h2>

<div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
       
      
       <Sliderr {...settings}>
       
        {listproductr && listproductr.map( product =>(
            <div className="card-wrapper">
   <ImageSlider key = {product._id}  product = {product} />
   </div>
))}

</Sliderr>
</div>

<h2><Link to= {'/category/others'}  style={{color:'black', fontFamily:"Brush Script MT"}}>Others Electronics</Link></h2>

<div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
       
      
       <Sliderr {...settings}>
       
        {listproductrr && listproductrr.map( product =>(
            <div className="card-wrapper">
   <ImageSlider key = {product._id}  product = {product} />
   </div>
))}

</Sliderr>
</div>


    

</MediaQuery>

<MediaQuery maxWidth={1224} >
<h2><Link to= {'/category/vetements-homme'}  style={{color:'black' , fontSize:"27px", fontFamily:"Brush Script MT"}}>Men Clothing</Link></h2>

<div className="title"  style={{border: "1px solid #778899" , marginTop:"1rem"}}>
       
          
           <Sliderr {...setting}>
           
            {listproducts && listproducts.map( product =>(
                <div className="card-wrapper" >
                                       

       <ImageSlider key = {product._id}  product = {product} />
       </div>
       
 ))}

    </Sliderr>
    </div>
    <h2><Link to= {'/category/vetements-femme'}  style={{color:'black' , fontSize:"27px", fontFamily:"Brush Script MT"}}>Women Clothing</Link></h2>

    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
         
          
           <Sliderr {...setting}>
           
            {listproductss && listproductss.map( product =>(
                <div className="card-wrapper" >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
    <h2><Link to= {'/category/vetements-enfant'}  style={{color:'black',fontSize:"27px", fontFamily:"Brush Script MT"}}>Kids Clothing</Link></h2>

<div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
   
      
       <Sliderr {...setting}>
       
        {listproducter && listproducter.map( product =>(
            <div className="card-wrapper" >
   <ImageSlider key = {product._id}  product = {product} />
   </div>
))}

</Sliderr>
</div>

    <h2><Link to= {'/category/telephones-and-tablettes'}  style={{color:'black' , fontSize:"27px", fontFamily:"Brush Script MT"}}>Phones</Link></h2>

    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>

          
          
           <Sliderr {...setting}>
           
            {listproductsss && listproductsss.map( product =>(
                <div className="card-wrapper" >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
    <h2><Link to= {'/category/watches'}  style={{color:'black' , fontSize:"27px", fontFamily:"Brush Script MT"}}>Watches</Link></h2>

    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
       
          
           <Sliderr {...setting}>
           
            {listproduct && listproduct.map( product =>(
                <div className="card-wrapper" >
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
    <h2><Link to= {'/category/parfums'}  style={{color:'black', fontSize:"27px", fontFamily:"Brush Script MT"}}>Parfums</Link></h2>

    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
        
          
           <Sliderr {...setting}>
           
            {listproducte && listproducte.map( product =>(
                <div className="card-wrapper">
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
    <h2><Link to= {'/category/accesoires'}  style={{color:'black', fontSize:"27px", fontFamily:"Brush Script MT"}}>Accessories</Link></h2>

    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
           
          
           <Sliderr {...setting}>
           
            {listproductee && listproductee.map( product =>(
                <div className="card-wrapper">
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>

    <h2><Link to= {'/category/maquillages'}  style={{color:'black',fontSize:"27px", fontFamily:"Brush Script MT"}}>Make ups</Link></h2>

    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
           
          
           <Sliderr {...setting}>
           
            {listproducteee && listproducteee.map( product =>(
                <div className="card-wrapper">
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
    
    <h2><Link to= {'/category/decoration'}  style={{color:'black',fontSize:"27px", fontFamily:"Brush Script MT"}}>Decoration</Link></h2>

    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
           
          
           <Sliderr {...setting}>
           
            {listproducteees && listproducteees.map( product =>(
                <div className="card-wrapper">
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
    <h2><Link to= {'/category/meubles'}  style={{color:'black',fontSize:"27px", fontFamily:"Brush Script MT"}}>Furniture</Link></h2>

    <div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
           
          
           <Sliderr {...setting}>
           
            {listproducteeess && listproducteeess.map( product =>(
                <div className="card-wrapper">
       <ImageSlider key = {product._id}  product = {product} />
       </div>
 ))}

    </Sliderr>
    </div>
    
    <h2><Link to= {'/category/ordinateurs-and-tvs'}  style={{color:'black',fontSize:"27px", fontFamily:"Brush Script MT"}}>Computers</Link></h2>

<div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
       
      
       <Sliderr {...setting}>
       
        {listproductr && listproductr.map( product =>(
            <div className="card-wrapper">
   <ImageSlider key = {product._id}  product = {product} />
   </div>
))}

</Sliderr>
</div>

<h2><Link to= {'/category/others'}  style={{color:'black',fontSize:"27px", fontFamily:"Brush Script MT"}}>Others Electronics</Link></h2>

<div className="title" style={{border: "1px solid #778899" , marginTop:"1rem"}}>
       
      
       <Sliderr {...setting}>
       
        {listproductrr && listproductrr.map( product =>(
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