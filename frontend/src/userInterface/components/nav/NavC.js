import React, {Fragment} from 'react'

import './Nav.scss'

const  NavC = (props) => {

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

    <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'tv'} style={{color:"black"}}>TV</a></button> 
    <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'laptop'} style={{color:"black"}}>Laptops</a></button>
    <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'computer'} style={{color:"black"}}>Computer</a></button>
    </ul>
  <ul className="main-menuz" >

    <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'acces'} style={{color:"black"}}>Accessories</a></button>
    <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'gaming'} style={{color:"black"}}>PC Gamers</a></button>
   
    </ul>

  
      </nav>
      </div>
      </div>


              </Fragment>
    )
}

export default NavC
