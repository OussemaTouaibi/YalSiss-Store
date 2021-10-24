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

<div className="headerz" data-sticky="true">
      <div className="headerz__top">
        <div className="ps-container">

                      <nav className="navigation">
       
              <ul className="main-menuz menuz">
               

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect} ><a href="" title={'Living Room'}>Living Room</a>
                </li>
                </ul>

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect} ><a href="" title={'Bedroom'}>Bedroom </a>
                </li>
                </ul>
             
                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect} ><a href="" title={'Kitchen'}>Kitchen</a>
                </li>
                </ul>

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect} ><a href="" title={'Bathroom'}>Bathroom</a>
                </li>
                </ul>

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect} ><a href="" title={'Dining Room'}>Dining Room </a>
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

export default NavM
