import React, {Fragment} from 'react'

import './Nav.scss'

const  NavD = (props) => {

  var sub = "" ;

  const handleSelect = (e) => {
  sub = e.target.title;
  console.log(sub);
  props.onSubSelect(sub)
  }

    return (
        <Fragment>

<div className="headerz" data-sticky="true">
      <div className="headerz__top">
        <div className="ps-container">

                      <nav className="navigation">
 
              <ul className="main-menuz menuz">
               

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect} ><a href="" title={'Mirrors'} >Mirrors</a>
                </li>
                </ul>

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect} ><a href="" title={'Vase'}>Vase</a>
                </li>
                </ul>
             
                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect} ><a href="" title={'Clock'}>Clock</a>
                </li>
                </ul>

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect}><a href="" title={'Wall hangings'} >Wall hangings</a>
                </li>
                </ul>

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect}><a href="" title={'Wallpapers'}>Wallpapers</a>
                </li>
                </ul>

              
            
               



 </ul>






    </nav>
    </div>
    </div>
    </div>
             
  
              </Fragment>
    )
}

export default NavD
