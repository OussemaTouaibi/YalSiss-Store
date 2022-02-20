import React, { useState, useEffect} from 'react'

import Layout from '../../components/shared/layout'
import Product2 from '../../components/product/product2'
import Loader from '../../components/shared/loader'

import { useDispatch, useSelector } from 'react-redux'


import { getAdminProducts } from '../../../actions/productActions'



import './homme.scss'

import NavC from '../../components/nav/NavC';


const Comp = () => {

   

    const dispatch = useDispatch();
   
    
   
    const { loading, products } = useSelector

    (state => state.products)

    useEffect(() => {

    
        dispatch(getAdminProducts());

      
        
    
      }, [dispatch])


    
    

      var listProducts = [];
      
    for  (var product of products){
        listProducts.push(product)
        
    }
    
    listProducts = listProducts.filter(product => product.category ===  "61c74c354d67570004d67dc9" );
    
    const [list, setList] = useState(listProducts);
    
  



const handleSelect = (sub) => {  
   
    setList(listProducts.filter(product => product.subs ===  sub ));
   
}





    return (
       
        <Layout>
                 {loading ? <Loader /> : (
            <div>
                
            <NavC onSubSelect={handleSelect} />
           
  
           
        
               
  
   <div className="main_content" >
             {list   && list.map( product =>(
       <Product2 key = {product._id}  product = {product} />

 ))}

</div>
      
         
</div>

)}
        </Layout>
    )
}


export default Comp