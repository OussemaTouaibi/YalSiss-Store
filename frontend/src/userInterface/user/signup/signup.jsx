import React, {Fragment, useState, useEffect} from "react";
import './signup.scss';
import Layout from '../../components/shared/layout'
import '../../../App.scss';
import { Formik } from 'formik';
import { Link, withRouter } from 'react-router-dom';

import Loader from '../../components/shared/loader'
import MetaData from '../../components/shared/metaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import { register, clearErrors } from "../../../actions/userActions";



const Signup = ({ history }) =>{

    
    const[user, setUser] = useState({
        name: '',
        email: '',
        password:''
    })

    const { name, email, password } = user;
    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview ] = useState('/images/default_avatar.jpg')

    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    useEffect(() => {

        if(isAuthenticated) {

            history.push('/')
          
        }

        if(error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, alert, isAuthenticated, error, history])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
     
        formData.set('password', password);
        formData.set('avatar', avatar);

        dispatch(register(formData))

    }

    const onChange = e => {
        if (e.target.name === 'avatar') {

            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }

            reader.readAsDataURL(e.target.files[0])

        } else {
            setUser({ ...user, [e.target.name]: e.target.value })
        }
    }


      
    return (
        <Layout>
            <Fragment>
                {loading ? <Loader /> :(
                    <Fragment>
                        <MetaData title={'register'} />
       <div className='sign-up'>
           <h1>Create an account</h1>
           <div className='form-container'>
               <Formik>
                        <form   onSubmit={submitHandler} >
                            <div>
                                <input
                                type='text'
                                name='name'
                                placeholder='Full Name'
                                className='nomad-input'
                                value={name}
                                onChange={onChange} 
                             
                                />
                            </div>

                            <div>
                                <input
                                type='email'
                                name='email'
                                placeholder='E-mail Address'
                                className='nomad-input' 
                                value={email}
                                onChange={onChange} 
                                />
                                

                            </div>

                            <div>
                                <input
                                type='password'
                                name='password'
                                placeholder='Password'
                                className=' nomad-input'
                                value={password}
                                onChange={onChange}
                                />

                            </div>
                            <div>
                            <div className='form-group'>
             
              <div>
                      <figure className='avatar mr-3 item-rtl'>
                          <img
                              src={avatarPreview}
                              className='rounded-circle'
                              alt='Avatar Preview'
                          />
                      </figure>
                  </div>
              <div className='d-flex align-items-center'>
               
                  <div className='custom-file'>
                      <input
                          type='file'
                          name='avatar'
                          className='custom-file-input'
                          id='customFile'
                          accept="images/*"
                          onChange={onChange}
                      />
                      <label className='custom-file-label' htmlfor='customFile'>
                          Choose Avatar
                      </label>
                  </div>
              </div>
          </div>
          </div>
                            <div className='submit-btn'>
                                <button
                                type='submit'
                                className='button is-black nomad-btn submit'
                                disabled={loading ? true : false}
                                >
                                    Sign Up
                                </button>
                            </div>

                            <div className='error-message'>             
                            </div>

                            <div>
                                <Link to='login'  className='disc'>
                                Already Have an Account ? Login
                                </Link> 
                            </div>
                            
                        </form>
               </Formik>
           </div> 
           </div>
           </Fragment>
           )}
           </Fragment>

        </Layout>
    )
}


export default withRouter(Signup);