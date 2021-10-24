import React, {Fragment, useState, useEffect} from "react";
import Layout from '../../components/shared/layout'
import { Formik } from 'formik';
import './login.scss';
import { Link, withRouter} from 'react-router-dom';


import Loader from '../../components/shared/loader'
import MetaData from '../../components/shared/metaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import { login, clearErrors } from "../../../actions/userActions";






const LogIn = ({ history, location }) => {
   

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {

        if(isAuthenticated) {

            history.push(redirect)
          
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, alert, isAuthenticated, error, history])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }


    return (

        <Layout>
            <Fragment>
                {loading ? <Loader /> :(
                    <Fragment>
                        <MetaData title={'login'} />
                        <div className='card'>
             <div className='log-in'>
            <h1>Login</h1>
            <div className='container'>
                <Formik >
               
                            <form onSubmit={submitHandler}>
                                <div>
                                    <input
                                    id='email_field'
                                    type='email'
                                    name='email'
                                    placeholder='E-mail'
                                    className="nomad-input"  
                                    value={email}          
                                    onChange={(e) => setEmail(e.target.value)}                        
                                    />
                                </div>

                                <div>
                                    <input
                                    id='password_field'
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    className="nomad-input"
                                    value={password}          
                                    onChange={(e) => setPassword(e.target.value)}   
                                    />
                                </div>

                                <div className='submit-btn'>

                                    <button
                                    id='login_button'
                                    type='submit'
                                    className='button is-black nomad-btn submit'

                                    >
                                        Login
                                    </button>
                                </div>

                                <div className='error-message'>
                                </div>

                                <div>
                                  <Link to='/password/forgot'  className='disc'>
                                        Forget Password?
                                  </Link>
                                  <Link to='signup'  className='disc'>
                                   Do You need an Account ? Click here 
                                  </Link>
                                </div>
                            </form>
                </Formik>
            </div>

            </div>
            </div>
                    </Fragment>
                )}
            </Fragment>
            
        </Layout>
        
    ) 
    
}

export default withRouter(LogIn);
