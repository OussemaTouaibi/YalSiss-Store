import React, {Fragment} from 'react'

import './Nav.scss'

const  NavH = (props) => {



  var sub = "" ;

const handleSelect = (e) => {
sub = e.target.title;
console.log(sub);
props.onSubSelect(sub)
}

    return (
        <div>

            <div className="" data-sticky="true">
             <nav className="">
              <ul className="main-menuz" >

                <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'Jean'} style={{color:"black"}}>Jeans</a></button> 
                <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'Shoes'} style={{color:"black"}}>Shoes</a></button>
                <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'Hoodies'} style={{color:"black"}}>Hoodies</a></button>
                <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'Shirts'} style={{color:"black"}}>Shirts</a></button>
                <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'T-shirt'} style={{color:"black"}}>T-shirt</a></button>
                </ul>
                <ul className="main-menuz" >
                <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'Shorts'} style={{color:"black"}}>Shorts</a></button>
                <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'caps'} style={{color:"black"}}>Caps</a></button>
                <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'Sport Clothes'} style={{color:"black"}}>Sport Clothes</a></button>
                <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'Jackets'} style={{color:"black"}}>Jackets</a></button>
              </ul>
              
                  </nav>
                  </div>
                  </div>
               
    )
}

export default NavH
