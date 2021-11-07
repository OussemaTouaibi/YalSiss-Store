import React, {Fragment} from 'react'

import './Nav.scss'

const  NavF = (props) => {

  var sub = "" ;

  const handleSelect = (e) => {
  sub = e.target.title;
  console.log(sub);
  props.onSubSelect(sub);
  
  }

    return (
        <Fragment>
           <div>

<div className="" data-sticky="true">
 <nav className="">
  <ul className="main-menuz" >

    <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'dress'} style={{color:"black"}}>Dress</a></button> 
    <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'Sweater'} style={{color:"black"}}>Hijab</a></button>
    <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'T-shirts'} style={{color:"black"}}>T-shirts</a></button>
    <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'GYM Clothes'} style={{color:"black"}}>Sports</a></button>
    </ul>
    <ul className="main-menuz" >
    <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'Hoodie'} style={{color:"black"}}>Hoodies</a></button>
    <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'Short'} style={{color:"black"}}>Shorts</a></button>
    <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'Jacket'} style={{color:"black"}}>Jackets</a></button>
    <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'Shoe'} style={{color:"black"}}>Shoes</a></button>


  </ul>
  
      </nav>
      </div>
      </div>


              </Fragment>
    )
}

export default NavF
