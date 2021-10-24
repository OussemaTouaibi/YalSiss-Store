import React, { useState } from 'react'
import Layout from '../components/shared/layout'

import './ContactPage.scss'
import emailjs from 'emailjs-com';

import { useSelector } from 'react-redux'

import CardFooter from '../components/footer/cardfooter';
    


const Result = () => {

    return(
        <p>Your message has been successfully sent. We will contact you soon</p>
    )
}
const ContactPage = () => {

  const { user, isAuthenticated, Loading } =  useSelector(state =>state.auth);

 const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_q2o00th', 'template_601wx9r', e.target, 'user_sWoiPS9tcNllohJTXoCeg')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      }

    return (
<Layout>       
<div className="ll">
    <div className="contact-section">
      <div className="contact-info">
        <div><i className="fas fa-map-marker-alt"></i>Address, City, Country</div>
        <div><i className="fas fa-envelope"></i>contact@email.com</div>
        <div><i className="fas fa-phone"></i>+00 0000 000 000</div>
        <div><i className="fas fa-clock"></i>Mon - Fri 8:00 AM to 5:00 PM</div>
      
      </div>
      
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form className="contact"onSubmit={sendEmail}>
          <input type="text" name="fullname" className="text-box" placeholder="Full Name" required></input>
          <input type="email" name="email" className="text-box" placeholder="Your Email" required></input>
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button className="send-btn" >Send</button>
          <div className="row">{result ? <Result /> : null}</div>
        </form>
      </div>
      </div>
      </div>

      {!Loading && (!isAuthenticated || user.role !== 'admin') && (
              <CardFooter />
              )}
        </Layout>

    )
}


export default ContactPage