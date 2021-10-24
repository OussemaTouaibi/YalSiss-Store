import React from 'react';


import Navbar from '../header1/navbar'
import Footer from '../footer/footer';
import Sidebar from '../sidebar/sidebar';
import { useSelector } from 'react-redux';



import './layout.scss'


const Layout=({ children }) => { 
    const { user, isAuthenticated, loading } =  useSelector(state =>state.auth)

    return(
    <>

    <Navbar />
    <Sidebar />
  
    
    <main>
        {
            children
        }
    </main>
    {!loading && (!isAuthenticated || user.role !== 'admin') && (
    <Footer />
    )}
    </>
    );
}

export default Layout;