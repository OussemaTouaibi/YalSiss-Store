import React, { Fragment, useState, useEffect } from 'react'
import Pagination from 'react-js-pagination'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

import Layout from '../components/shared/layout'
import Product2 from '../components/product/product2'
import Loader from '../components/shared/loader'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'

import { getProducts } from '../../actions/productActions'

import CardFooter from '../components/footer/cardfooter';

import './home-page2.scss';




const { createSliderWithTooltip } = Slider;
const Range  = createSliderWithTooltip(Slider.Range)

const Homepage2 = ({ match }) => {




  const [currentPage, setCurrentPage] = useState(1)
  const [price, setPrice]= useState([1, 1000])
  const [category, setCategory] = useState('')
  const [rating, setRating] = useState(0)

  const { user, isAuthenticated, Loading } =  useSelector(state =>state.auth)

  

  const dispatch = useDispatch();
  const alert    = useAlert();
  
  const { loading, products, error, productsCount, resPerPage, filtredProductsCount } = useSelector(state => state.products)

  const keyword = match.params.keyword



  useEffect(() => {

    if(error) {

      return  alert.error(error)
      
     }

    dispatch(getProducts(keyword, currentPage, price, category, rating));

  }, [dispatch, alert, error,keyword, currentPage, price, category, rating])

    function setCurrentPageNo(pageNumber)
     {
    setCurrentPage(pageNumber)

      }

      let count = productsCount;
      if(keyword) {
        count = filtredProductsCount
      }


    return(
   
        <Layout>
          {loading ? <Loader /> : (
              <Fragment>
                 <div className ='container container-fluid'>

<h1 id = "products_heading">All Products</h1>

<section id = "products" className ="container mt-5">

    <div className = "row">

            {keyword ? (
                <Fragment>
                  <div className = "col-6 col-md-3 mt-5 mb-5" >
                  <div className = "px-5">
                      <Range
                      marks={{
                        1   : `1Dt`,
                        1000: `1000Dt`
                      }}
                      min          = {1}
                      max          = {1000}
                      defaultValue = {[1, 1000]}
                      tipFormatter = {value => `${value}DT`}
                      tipProps     = {{
                        placement: "top",
                        visible  : true
                      }}
                      value    = {price}
                      onChange = {price => setPrice(price)}
                      />
                        <hr className="my-5" />

                      <div className="mt-3">
                        <h4 className="mb-3">
                          Ratings
                        </h4>
                        <ul className="pl-0">
                                                    {[5, 4, 3, 2, 1].map(star => (
                                                        <li
                                                            style={{
                                                                cursor: 'pointer',
                                                                listStyleType: 'none'
                                                            }}
                                                            key={star}
                                                            onClick={() => setRating(star)}
                                                        >
                                                            <div className="rating-outer">
                                                              <div className="rating-inner"
                                                              style={{
                                                                width: `${star * 20}%`
                                                              }}
                                                              >

                                                              </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                        </div> 
                    </div>
                  </div>
                 
                  <div className="main_content">
                      {products && products.map(product =>(
                < Product2 key = {product._id}  product = {product}/>
        
          ))}
                    </div>
           
                </Fragment>
     

            ): (
                
              <Fragment>
          
          
             <div className="main_content">
             { products && products.map(product =>(
                < Product2 key = {product._id}  product = {product}/>
          ))}
       </div>
         </Fragment>
            )}
          




</div>
</section>

    
    </div>  
        {resPerPage <= count && (

       
                <div className = "d-flex justify-content-center mt-5">
                             <Pagination
                                activePage        = {currentPage}
                                itemsCountPerPage = {resPerPage}
                                totalItemsCount   = {productsCount}
                                onChange          = {setCurrentPageNo}
                                nextPageText      = {'Next'}
                                prevPageText      = {'Prev'}
                                firstPageText     = {'First'}
                                lastPageText      = {'Last'}
                                itemClass         = "page-item"
                                linkClass         = "page-link"
                            />
                        </div>
                         )}
              </Fragment>

          )}
 {!Loading && (!isAuthenticated || user.role !== 'admin') && (
          <CardFooter />
          )}
        </Layout>
        
    )
}

export default Homepage2;