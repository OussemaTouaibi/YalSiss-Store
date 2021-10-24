import React, {Fragment} from 'react'

import './Nav.scss'

const  NavT= (props) => {

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
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect}><a href="" title={'Apple'}>Apple</a>
                </li>
                </ul>

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect}><a href="" title={'Samsung'}>Samsung </a>
                </li>
                </ul>
            
             
                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect}><a href="" title={'Huawei'}>Huawei</a>
                </li>
                </ul>

              
                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect}><a href="" title={'Xiaomi'}>Xiaomi</a>
                </li>
                </ul>

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect}><a href="" title={'Evertek'}>Evertek</a>
                </li>
                </ul>
             
                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect} ><a href="" title={'Infinix'}>Infinix </a>
                </li>
                </ul>
                
                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect}><a href="" title={'Nokia'}>Nokia</a>
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

export default NavT
