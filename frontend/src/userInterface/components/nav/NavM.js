import React, {Fragment} from 'react'

import './Nav.scss'

const  NavM= (props) => {

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

    <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'living'} style={{color:"black"}}>Living Room</a></button> 
    <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'bedroom'} style={{color:"black"}}>Bedroom</a></button>
    <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'kitchen'} style={{color:"black"}}>Kitchen</a></button>
    </ul>
    <ul className="main-menuz" >
    <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'bathroom'} style={{color:"black"}}>Bathroom</a></button>
    <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'dining'} style={{color:"black"}}>Dining Room</a></button>
    <button className="button is-link is-outlined"  onClick={handleSelect}><a href="#"  title={'office'} style={{color:"black"}}>Office</a></button>
   
    </ul>

  
      </nav>
      </div>
      </div>


              </Fragment>

    )
}

export default NavM
