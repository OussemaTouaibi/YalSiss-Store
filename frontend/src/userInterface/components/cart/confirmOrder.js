import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'

import MetaData from '../shared/metaData'
import CheckoutSteps from './checkoutSteps'
import './checkoutSteps.scss'

import { useSelector, useDispatch } from 'react-redux'
import Layout from '../shared/layout'

import { createOrder, clearErrors } from '../../../actions/orderActions'

const ConfirmOrder = ({ history }) => {

    const dispatch = useDispatch();
    const { cartItems, shippingInfo } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.auth)
    const { error } = useSelector(state => state.newOrder)

    useEffect(() => {

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
    }, [dispatch, alert, error])



    const order = {
        orderItems: cartItems,
        shippingInfo,
       

    }

    const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
    if (orderInfo) {
        order.itemsPrice = orderInfo.itemsPrice
        order.shippingPrice = orderInfo.shippingPrice
        order.taxPrice = orderInfo.taxPrice
        order.totalPrice = orderInfo.totalPrice
    }

   



    // Calculate Order Prices
    const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shippingPrice = 7
    const totalPrice = (itemsPrice + shippingPrice).toFixed(2) 

    

    const processToPayment = () => {
        const data = {
            itemsPrice: itemsPrice.toFixed(2),
            shippingPrice,
            totalPrice
        }

        sessionStorage.setItem('orderInfo', JSON.stringify(data))
       
        dispatch(createOrder(order))
        history.push('/success')
    }

    return (
        <Layout>
        <Fragment>

            <MetaData title={'Confirm Order'} />

            <CheckoutSteps shipping confirmOrder />

            <div className="row d-flex justify-content-between">
                <div className="col-12 col-lg-8 mt-5 order-confirm">
                    <div>
                    <h4 className="mb-3">Shipping Info</h4>
                    <p><b>Name:</b> {user && user.name}</p>
                    <p><b>Phone:</b> {shippingInfo.phoneNo}</p>
                    <p className="mb-4"><b>Address:</b> {`${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`}</p>
                    </div>
                    <hr />
                    <h4 className="mt-4">Your Cart Items:</h4>

                    {cartItems.map(item => (
                        <Fragment>
                            <hr />
                            <div className="cart-item my-1" key={item.product}>
                                <div className="row">
                                    <div className="col-4 col-lg-2">
                                        <img src={item.image} alt="Laptop" height="45" width="65" />
                                    </div>

                                    <div className="col-5 col-lg-6">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </div>


                                    <div className="col-4 col-lg-4 mt-4 mt-lg-0">
                                        <p>{item.quantity} x {item.price}DT = <b>{(item.quantity * item.price).toFixed(2)}DT</b></p>
                                    </div>

                                </div>
                            </div>
                            <hr />
                        </Fragment>
                    ))}



                </div>

                <div className="col-12 col-lg-3 my-4">
                    <div id="order_summary">
                        <h4>Order Summary</h4>
                        <hr />
                        <p>Subtotal:  <span className="order-summary-values">{itemsPrice}DT</span></p>
                        <p>Shipping: <span className="order-summary-values">{shippingPrice}DT</span></p>

                        <hr />

                        <p>Total: <span className="order-summary-values">{totalPrice}DT</span></p>

                        <hr />
                        <button 
                        id="checkout_btn" 
                        className="btn btn-primary btn-block"
                         onClick={processToPayment}
                         type="submit"
                         >Confirm
                         
                         </button>
                    </div>
                </div>


            </div>

        </Fragment>
        </Layout>
    )
}

export default ConfirmOrder