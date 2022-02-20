import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Loader from '../../components/shared/loader'
import MetaData from '../../components/shared/metaData'
import Layout from '../../components/shared/layout'
import './profile.scss'

const Profile = () => {

    const { user, loading } = useSelector(state => state.auth)

    return (
        <Layout>
    
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Your Profile'} />

                    <h2 className="mt-5 ml-5" ><h2  style={{marginLeft:'5rem'}}>My Profile </h2></h2>
                    <div className="row justify-content-around mt-5 user-info">
                        <div className="col-12 col-md-3">
                            <figure className='avatar avatar-profile'  style={{marginLeft:'5rem'}}>
                                <img className="rounded-circle img-fluid" src={user.avatar.url} alt={user.name} />
                            </figure>
                            <Link to="/me/update" id="edit_profile" className="btn btn-primary btn-block my-5">
                                Edit Profile
                            </Link>
                        </div>

                        <div className="col-12 col-md-5">
                            <h4 style={{marginLeft:'1rem'}}>Full Name</h4>
                            <p style={{marginLeft:'1rem'}}>{user.name}</p>

                            <h4 style={{marginLeft:'1rem'}}>Email Address</h4>
                            <p style={{marginLeft:'1rem'}}>{user.email}</p>

                            <h4 style={{marginLeft:'1rem'}}>Joined On</h4>
                            <p style={{marginLeft:'1rem'}}>{String(user.createdAt).substring(0, 10)}</p>

                            {user.role !== 'admin' && (
                                <Link to="/orders/me" className="btn btn-danger btn-block mt-5">
                                    My Orders
                                </Link>
                            )}

                            <Link to="/password/update" className="btn btn-primary btn-block mt-3">
                                Change Password
                            </Link>
                        </div>
                    </div>
                 <div className="nn">

                 </div>
                </Fragment>
            )}
   
        </Layout>
    )
}

export default Profile