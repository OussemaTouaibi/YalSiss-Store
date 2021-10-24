import React, { Fragment } from 'react'
import Layout from '../components/shared/layout'
import {Col, Container, Row} from 'reactstrap'

import T  from '../../assets/t.jpg';
import D  from '../../assets/d.jpg';
import A  from '../../assets/a.jpg';
import Z  from '../../assets/z.jpg';
import I  from '../../assets/i.png';
import Q  from '../../assets/q.jpg';
import X  from '../../assets/x.jpg';


import Ou from '../../assets/Oussema.png';
import Ya from '../../assets/Yassine.jpg';

import Vd from '../../assets/video/vd.mp4';


import './aboutUs.scss';

import { useSelector } from 'react-redux';

import CardFooter from '../components/footer/cardfooter';

import MediaQuery from 'react-responsive';




const About = () => {


  const { user, isAuthenticated, Loading } =  useSelector(state =>state.auth);

    return (
        <Layout>

          <Fragment>
        <div >
          
        <video
        autoPlay
        loop
        muted
        style={{width:'100%'}}

        >
       
          <source src={Vd} type="video/mp4" />
         
        </video>
     
        </div>
            </Fragment>

       
<Fragment>    
              
            <div className="About">
            <h2 className="about-title">
                About us
              </h2>
              <Row>
                <Col md="3" >
                      <div className="about-item">
                      <h3 className="about-item-title">Our goals</h3>
                        <br></br>
                        <p className="about-item-text">Our ultimate goal is to make international shipping easier for online shoppers. </p> <p>We are improving our service to become the first package forwarding service in the market every day. </p>
                      </div>
                </Col>
                <MediaQuery minWidth={1224}>
                     <div className="about-img">
                      <img src={T} alt="" />
                      </div>
                      </MediaQuery>
                      <MediaQuery maxWidth={1224}>
                     <div>
                      <img className='img' src={T} alt="" />
                      </div>
                      </MediaQuery>
         
                
              </Row>
              <Row>
          
                      
             </Row>
              <Row>
              <MediaQuery minWidth={1224}>
              <Col md="6" style={{marginLeft:"40%" , marginTop:"9rem"}}>
        
                      <div className="about-item">
                        <br></br>
                        <p className="about-item-text">Customers can take advantage of our shipping prices, which are the most cost saving in the market. 
Our excellent customer service, trustworthy partners, and lowest pricing are the secret of Yalsiss.
To satisfy our valued customers with every box from Yalsiss is our passion while displaying our responsive customer service, low shipping rates, reliability, and integrity.
                        We are dedicated to constantly improving our service. Since our first goal is making easier online shopping in tunisia.
</p>
                      </div>
                </Col>
                </MediaQuery>

                <MediaQuery maxWidth={1224}>
              <Col md="6" style={{marginTop:"2rem"}}>
        
                      <div className="about-item">
                        <br></br>
                        <p className="about-item-text">Customers can take advantage of our shipping prices, which are the most cost saving in the market. 
Our excellent customer service, trustworthy partners, and lowest pricing are the secret of Yalsiss.
To satisfy our valued customers with every box from Yalsiss is our passion while displaying our responsive customer service, low shipping rates, reliability, and integrity.
                        We are dedicated to constantly improving our service. Since our first goal is making easier online shopping in tunisia.
</p>
                      </div>
                </Col>
                </MediaQuery>




                <MediaQuery minWidth={1224}>
                <div className="about-imgg" style={{marginTop:"-22%"}}>
                      <img src={D} alt="" />
                      </div>  
                      </MediaQuery>
                      <MediaQuery maxWidth={1224}>
                      <div>
                      <img className="img" src={D} alt="" />
                      </div>  
                      </MediaQuery>
                      
              </Row>
              <br />
              <Row >
              <MediaQuery minWidth={1224}>
              <div className="about-imggg" style={{marginTop:"-15%" , marginLeft:"50%"}}>
                      <img src={A} alt="" />
                  
                      </div>
                      </MediaQuery>
                      <MediaQuery maxWidth={1224}>
              <div  >
                      <img className="img" src={A} alt="" />
                  
                      </div>
                      </MediaQuery>
              </Row>
              <Row className="justify-content-center">

                <Col md="6" style={{marginTop:"3rem"}}>
                  <div className="about-item">
                        <br></br>
                        <p className="about-item-text">We will be here for all our members to help with every step of the process with the whole Ship team.
</p>
                      </div>
                     
                </Col>
                <MediaQuery minWidth={1224}>
                <div className="about-imgz">
                      <img src={Z} alt="" />
                      </div>
                      </MediaQuery>

                      <MediaQuery maxWidth={1224}>
                <div>
                      <img  className="img" src={Z} alt="" />
                      </div>
                      </MediaQuery>
              </Row>
            
        

  </div>



            <div className="About">
              <Row>
                <Col md="6">
                      <div className="about-item">
                        <h3 className="about-item-title">Our Products</h3>
                        <br></br>
                        <p className="about-item-text">-Men's Clothes
                        </p>
                        <p className="about-item-text">-Women's Clothes
                        </p>
                        <p className="about-item-text">-Accessories
                        </p>
                        <p className="about-item-text">-Mobile Phones & Electronics 
                        </p>
                        <p className="about-item-text">-Parfumes, Makeup, Watches ...
                        </p>
                        <p className="about-item-text">-Decoration Products & Furnitures
                        </p>
                      </div>
                </Col>
                <Col md="6">
                  <div className="about-item">
                        <h3 className="about-item-title">How it works</h3>
                        <br></br>
                        <p className="about-item-text">Shop online from your home with our  online store and get your packages delivered to your door. </p>
<p>
Sign up with Yalsiss and Once we receive your packages, we will consolidate your packages into one box and ship them to your home address
packages will be delivered in 2-4 days.</p>
                      </div>
                </Col>
                <MediaQuery maxWidth={1224}>
                <div>
                      <img className="img" src={Q} alt="" />
                      </div>      
                      </MediaQuery>

                      <MediaQuery minWidth={1224}>
                <div className="about-imga">
                      <img src={Q} alt="" />
                      </div>      
                      </MediaQuery>
 <br/>
                      <MediaQuery maxWidth={1224}>
                      <div>
                      <img className="img" src={X} alt="" />
                      </div>   
                      </MediaQuery>

                      <MediaQuery minWidth={1224}>
                      <div className="about-imga">
                      <img src={X} alt="" />
                      </div>   
                      </MediaQuery>
              </Row>
              <Row className="justify-content-center">
                <Col md="6">
                      <div className="about-item" style={{marginTop:"2rem"}}>
                        <br></br>
                        <p className="about-item-text">
we work harder every day to make your life better and easier.
</p>
                      </div>
                </Col>     
                <MediaQuery maxWidth={1224}>
                  <div>
                      <img className="img" src={I} alt="" />
                      </div>     
                      </MediaQuery>  
                      <MediaQuery minWidth={1224}>
                  <div className="about-imgzz">
                      <img src={I} alt="" />
                      </div>     
                      </MediaQuery> 
              </Row>
            </div>
            </Fragment>
            <Fragment>
          <section className="our-team light-gray-bg padding-top-100 padding-bottom-100" style={{background: "linear-gradient(90deg,rgb(0,48,96) 0% ,rgb(2, 2, 2) 100%)"}}>
      <div className="container">
        <div className="heading text-center">
          <h4 style={{color:"white"}}>Our Team</h4>
          <hr/>
        </div>
        
       
        <ul className="row">
          
         
          <li className="col-md-6 text-center animate fadeInUp" data-wow-delay="0.4s">
            <article> 
         
              <div className="avatar"> <img className="img-circle" src={Ya} alt="" /> 
              <div className="team-hover">
                  <div className="position-center-center">
                    <div className="social-icons"> <a href="#."><i className="icon-social-facebook"></i></a> <a href="#."><i className="icon-social-twitter"></i></a> <a href="#."><i className="icon-social-dribbble"></i></a> </div>
                  </div>
                </div>
              </div>
        
              <div className="team-names">
                <h6 style={{color:"white"}}>Yassine Kadri</h6>
                <p style={{color:"white"}}>CEO & FOUNDER</p>
              </div>
            </article>
          </li>
          
     
          <li className="col-md-6 text-center animate fadeInUp" data-wow-delay="0.8s">
            <article> 
        
              <div className="avatar"> <img className="img-circle" src={Ou} alt="" /> 
             
                <div className="team-hover">
                  <div className="position-center-center">
                    <div className="social-icons"> <a href="#."><i className="icon-social-facebook"></i></a> <a href="#."><i className="icon-social-twitter"></i></a> <a href="#."><i className="icon-social-dribbble"></i></a> </div>
                  </div>
                </div>
              </div>
           
              <div className="team-names">
                <h6 style={{color:"white"}}>Oussema Touaibi</h6>
                <p style={{color:"white"}}>DESIGNER & DEVELOPER</p>
              </div>
            </article>
          </li> 
        </ul>
      </div>
    </section>

          </Fragment>
            {!Loading && (!isAuthenticated || user.role !== 'admin') && (
              <CardFooter />
              )}
              
              
        </Layout>
      )
}
export default About;
