import React, { Fragment, useState, useEffect } from 'react'

import Layout from '../../components/shared/layout'
import Product2 from '../../components/product/product2'
import Loader from '../../components/shared/loader'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'

import { getAdminProducts } from '../../../actions/productActions'

import './homme.scss'
import NavF from '../../components/nav/NavF';



const Femme = () => {

   

    const dispatch = useDispatch();
    
    
   
    const { loading, products } = useSelector
    (state => state.products)

  

var listProducts = [];


    for  (var product of products){
      listProducts.push(product)
      
}

listProducts = listProducts.filter(product => product.category ===  "612b9665627914423437dd0f" );


const [list, setList] = useState([]);


    useEffect(() => {

    
        dispatch(getAdminProducts());
        setList(listProducts);
    
      }, [dispatch])
    
       









console.log(listProducts);




const handleSelect = (sub) => {
    

    setList(listProducts.filter(product => product.subs ===  sub ));



}




    return (
        <Layout>

 {loading ? <Loader /> : (
            <div>

            <NavF onSubSelect={handleSelect} />
           

        
           
    
   <div className="main_content">
             {list   && list.map( product =>(
       <Product2 key = {product._id}  product = {product} />

 ))}

</div>
</div>
 )}

        </Layout>
    )
}


export default Femme