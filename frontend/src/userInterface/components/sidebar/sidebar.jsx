import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../sidebar/sidebarData';
import SubMenu from '../sidebar/subMenu';
import { IconContext } from 'react-icons/lib';
import './navbar.scss'
import Search from '../shared/search'

import MediaQuery from 'react-responsive';
import {useSelector } from 'react-redux'




const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const NavIcon = styled(Link)`
  margin-right: 25rem;
  font-size: 1.7rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
`;

const SidebarNav = styled.nav`
 
  overflow-y: scroll;
  pointer : cursor;
  background: #15171c;
  width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: absolute;        top: 20;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 2;  
`;
const SidebarNavv = styled.nav`
 
  overflow-y: scroll;
  pointer : cursor;
  background: #15171c;
  width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: absolute;        top: 20;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 2;  
`;
const SidebarWrap = styled.div`
  width: 100%;
  
`;


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const { cartItems } = useSelector(state => state.cart)


  return (
    <>
    
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar}  />
          </NavIcon>

          <MediaQuery minWidth={1224}>
          <div className="col-12 col-md-6 mt-2 mt-md-0">

    <Route render={({ history }) => <Search history={history} /> } />


      </div>
            </MediaQuery>
          
          <MediaQuery maxWidth={1224}>
          <div className="col-12 col-md-6 mt-2 mt-md-0"  style={{marginRight:"29rem"}}>

        <Route render={({ history }) => <Search history={history} /> } />


        <ul className="navbarr__links" style={{marginLeft:"44%"}}>
              
              <li>
                  <Link to="/cart" style= {{ textDecoration : 'none' , marginRight:'0.6rem'}} className="cartlink">
                      <i className="fas fa-shopping-cart"></i>
                  <span className="cartlogo__badge">{cartItems.length}</span>
                  </Link>
              </li>
              
          </ul>

          </div>
         
        
         
      </MediaQuery>
      <MediaQuery minWidth={1224}>
          <div>
            <ul className="navbarr__links">
              
                <li>
                    <Link to="/cart" style= {{ textDecoration : 'none' , marginRight:'0.6rem'}} className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                    Panier
                    <span className="cartlogo__badge">{cartItems.length}</span>
                    </Link>
                </li>
                
            </ul>
     
            </div>
       </MediaQuery>
            
            
        </Nav>

        <MediaQuery minWidth={1224}>

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar}/>
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu  item={item} key={index}/>;
            })}


            
       
          </SidebarWrap>
          
        </SidebarNav>
        </MediaQuery>

        <MediaQuery minWidth={1224}>
          
        <SidebarNavv sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}


            
       
          </SidebarWrap>
          
        </SidebarNavv>
        </MediaQuery>

      </IconContext.Provider>
    
    </>
  );
};

export default Sidebar;