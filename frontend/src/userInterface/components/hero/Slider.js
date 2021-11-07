import React, {useState} from 'react'
import './Slider.scss'
import BtnSlider from './BtnSlider'
import dataSlider from './SliderData'

import M1 from '../../../assets/HeroSlider/Capture.PNG'
import M2 from '../../../assets/HeroSlider/Capture1.PNG'
import M3 from '../../../assets/HeroSlider/Capture2.PNG'
import M4 from '../../../assets/HeroSlider/Capture3.PNG'
import M5 from '../../../assets/HeroSlider/Capture4.PNG'










export default function Slider() {

  

   

    return (
   
        <div className="container-slider">
        
          <div className="slidesa">
 
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />
            <input type="radio" name="radio-btn" id="radio5" />
       

         
            <div className="slidea first">
              <img src={M4} alt="" />
            </div>
            <div className="slidea">
              <img src={M2} alt="" />
            </div>
            <div className="slidea">
              <img src={M3} alt="" />
            </div>
            <div className="slidea">
              <img src={M1} alt="" />
            </div>
            <div className="slidea">
              <img src={M5} alt="" />
            </div>
       
     
           
            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
              <div className="auto-btn5"></div>
      

            </div>
 
          </div>
        
          <div className="navigation-manual">
            <label for="radio1" className="manual-btn"></label>
            <label for="radio2" className="manual-btn"></label>
            <label for="radio3" className="manual-btn"></label>
            <label for="radio4" className="manual-btn"></label>
            <label for="radio5" className="manual-btn"></label>
        
          </div>
        
        </div>
 
    )
}