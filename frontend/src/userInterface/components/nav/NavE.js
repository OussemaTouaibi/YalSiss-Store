import React, {Fragment} from 'react'

import './Nav.scss'

const  NavE = (props) => {

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
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect}><a href="" title={'Baby'}>Baby</a>
                </li>
                </ul>

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect}><a href="" title={'Kids'}>Kids</a>
                </li>
                </ul>
             
                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect}><a href="" title={'Shoess'}>Shoes</a>
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

export default NavE
