import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.styles.scss'
import Dropdown from './dropdown'
import { Button } from '../button/button';

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from '../../../actions/userActions'

import MediaQuery from 'react-responsive';

import { SidebarData } from '../../components/sidebar/sidebarData';
import SubMenu from '../../components/sidebar/subMenu';

import Im1 from "../../../assets/e.PNG"



const Navbar = ()  => {

    const { user, isAuthenticated, loading } =  useSelector(state =>state.auth)


const alert = useAlert();
const dispatch = useDispatch();



const logoutHandler = () => {
    dispatch(logout());
    alert.success('Logged out successfully.')
}


    const [click, setClick] = useState(false)
    const[dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        }else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        }else {
            setDropdown(false);
        }
    };

    return(
    <Fragment>
        
        <nav className='navbar'>
            <Link to ='/'
            className='navbar-logo'>
                <h4 className="ttx">
              YalSiss
              </h4>
            </Link>

            <MediaQuery minWidth={1224}>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
    
            <ul className={click ? 'nav-menu active' : 'nav-menu'} >

         

            <li className='nav-item'>
            <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
            Home
            </Link>
            </li>

            <li className='nav-item'>
            <Link to ='/Home2' className='nav-links' onClick={closeMobileMenu}>
            All Products
            </Link>
            </li>

            <li className='nav-item'>
            <Link to ='/contact' className='nav-links' onClick={closeMobileMenu}>
            Contact
            </Link>
            </li>

            <li className='nav-item'>
            <Link to ='/about' className='nav-links' onClick={closeMobileMenu}>
            About Us
            </Link>
            </li>
    
            </ul>
            </MediaQuery>

            <MediaQuery maxWidth={1224} >
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>    
 
            <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                        <div style={{  overflow: "auto"}} >
                         <img 
                             className="avatar-navv"
                             src={Im1}
                             alt="logo"
                            
                         />
      
              
            {SidebarData.map((item, index) => {
              return <SubMenu  item={item} key={index} />;
            })}

<li className='nav-item' style={{marginTop:'20%'}}>
            <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
            Home
            </Link>
            </li>

            <li className='nav-item'>
            <Link to ='/Home2' className='nav-links' onClick={closeMobileMenu}>
            All Products
            </Link>
            </li>

            <li className='nav-item'>
            <Link to ='/contact' className='nav-links' onClick={closeMobileMenu}>
            Contact
            </Link>
            </li>

            <li className='nav-item'>
            <Link to ='/about' className='nav-links' onClick={closeMobileMenu}>
            About Us
            </Link>
            </li>
            {!loading && (!isAuthenticated || user.role !== 'user') && (
                <>
            <li className='nav-item'>
            <Link to ='/login' className='nav-links' onClick={closeMobileMenu}>
            Login
            </Link>
            </li>
            <li className='nav-item'>
            <Link to ='/signup' className='nav-links' onClick={closeMobileMenu}>
            Sign Up
            </Link>
            </li>
            </>
    )}
             </div>
             
            </ul>
 
        </MediaQuery>


            <MediaQuery minWidth={1224}>
              
            {user ? (
                 <div className="ml-4 dropdown d-inline">
                 <Link to="#!" 
                 className="btn dropdown-toggle " 
                 style={{ textDecoration : "none",
                 color: '#003060',
                 marginBottom:'12%',
                   }}
                 type="button" 
                 id="dropDownMenuButton"
                  data-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false">

                     <figure className="avatar avatar-nav">
                         <img
                             src={user.avatar && user.avatar.url}
                             alt={user && user.name}
                             className="rounded-circle"
                         />
                     </figure>
                     <span>{user && user.name}</span>
                 </Link>
                 <div className="dropdown-menu"  aria-labelledby="dropDownMenuButton">
                     
                 {user && user.role === 'admin' && (
                                    <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                )}
                                <Link className="dropdown-item" to="/orders/me">Orders</Link>
                                <Link className="dropdown-item" to="/me">Profile</Link>
                                <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>
                                  Log Out
                                </Link>
                 </div>
                 </div>

            ) : !loading && <>
            <Link className="sig" to="/login">
            <Button>Login</Button>
            </Link>
            <Link className="sig" to="/signup">
            <Button>Sign Up</Button>
            </Link>
            </>
            }
            </MediaQuery>
            
            <MediaQuery maxWidth={1224}>
         
            {user ? (
                 <div className="ml150" style={{width:"20%"}} >
                 <Link to="#!" 
                 className="" 
                 style={{ textDecoration : "none",
                 color: '#003060',
                 width:"0%",
                 marginBottom:'12%',
                 
                   }}
                 type="button" 
                 id="dropDownMenuButton"
                  data-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false">

                     <figure className="avatar avatar-nav" style={{marginLeft:"0.8rem"}}>
                         <img 
                             src={user.avatar && user.avatar.url}
                             alt={user && user.name}
                             className="rounded-circle"
                         />
                     </figure>
                     <span style={{color:"white"}}>{user && user.name}</span>
                 </Link>
                 <div className="dropdown-menu ml155"  aria-labelledby="dropDownMenuButton" >
                     
                 {user && user.role === 'admin' && (
                                    <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                )}
                                <Link className="dropdown-item" to="/orders/me">Orders</Link>
                                <Link className="dropdown-item" to="/me">Profile</Link>
                                <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>
                                  Log Out
                                </Link>
                 </div>
                 </div>

            ) : !loading && <>
            <Link className="sig" to="/login">
            <Button>Connexion</Button>
            </Link>
            <Link className="sig" to="/signup">
            <Button>Créez un compte</Button>
            </Link>
            </>
            }
            </MediaQuery>
        </nav>

    </Fragment>
    
    );
}

export default Navbar;