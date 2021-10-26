import React, { Fragment } from 'react';
import './footer.styles.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <Fragment>
        
 
<div className="container" style={{maxWidth: "300%"}}>

<div className="text-white text-center text-lg-start " style={{background: "linear-gradient(90deg,rgb(0,48,96) 0% ,rgb(2, 2, 2) 100%)"}}>

<div className="container p-4">

  <div className="row mt-4">
    
    <div className="col-lg-4 col-md-12 mb-4 mb-md-0" >
      <div className="footer-link-items" style={{marginLeft:"5rem"}}>
                        <h3 style={{color: "white", textDecoration: "underline"}}>About Us</h3>
                        <Link to='/about'>Who are we</Link>
                    </div>
          
                 

      <div className="mt-4" style={{marginLeft:"4rem"}}>
      <div className="footer-link-items">
                        <h3 style={{color: "white", textDecoration: "underline"}}>Contact Us</h3>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/contact'>Support</Link>
                    </div>
      </div>
    </div>
  
    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
      <div className="form-outline form-white mb-4">
      <div className="footer-link-items" style={{marginLeft:"5rem"}}>
                        <h3 style={{color: "white", textDecoration: "underline"}}>Social Media</h3>
                        <Link to='https://www.instagram.com/yalsiss_online_store/'>Instagram</Link>
                        <Link to='https://www.facebook.com/YalSiss-108120531666104'>Facebook</Link>
                        <Link to='https://www.youtube.com/channel/UCDqGjpHOqlRnFM0w2TtRdug/featured'>Youtube</Link>
                    </div>
      </div>
      
      


  </div>
  <div className="form-outline form-white mb-4">
  <div className="footer-link-items"style={{marginLeft:"5.4rem"}}>
              <h3 style={{color: "white", textDecoration: "underline"}}>Products</h3>
           <Link to='/category/vetements-homme'>Men Clothing</Link>
           <Link to='/category/vetements-femme'>Women Clothing</Link>
           <Link to='/category/telephones-and-tablettes'>Phones</Link>
           <Link to='/category/watches'>Watches</Link>
           <Link to='/category/vetements-parfums'>Parfums</Link>

       </div>
      </div>

</div>

<div className="text-center p-3">
<div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            {/* Logo will be here*/}
                        </Link>
                    </div>
                    <small className="website-rights">YalSiss © {year} All rights reserved. </small>
                    <div className="social-icons">
                    
                    <Link 
                    className="social-icon-link facebook" 
                    to='https://www.facebook.com/YalSiss-108120531666104' target='_blank' 
                    aria-label='Facebook'>
                    <i className="fab fa-facebook-f"></i>
            </Link>

            <Link 
                    className="social-icon-link instagram" 
                    to='https://www.instagram.com/yalsiss_online_store/' target='_blank' 
                    aria-label='Instagram'>
                     <i className="fab fa-instagram"></i>
            </Link>
            <Link 
                    className="social-icon-link youtube" 
                    to='https://www.youtube.com/channel/UCDqGjpHOqlRnFM0w2TtRdug/featured' target='_blank' 
                    aria-label='Youtube'>
                     <i className="fab fa-youtube"></i>
            </Link>
        </div>
 
</div>

</div>

</div>
</div>
</div>

        </Fragment>
    );
}

export default Footer;