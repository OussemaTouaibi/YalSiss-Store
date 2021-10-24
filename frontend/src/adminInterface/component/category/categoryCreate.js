import React, { Fragment, useEffect, useState } from 'react'



import Layout from'../../../userInterface/components/shared/layout'
import Loader from '../../../userInterface/components/shared/loader'
import MetaData from '../../../userInterface/components/shared/metaData'
import Sidebar from '../sideBar/sideBar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { createCategory, clearErrors } from '../../../actions/categoryActions'
import { CREATE_CATEGORY_RESET } from '../../../constants/categoryConstants'

import './category.scss'





const CategoryCreate = () => {

    const [name, setName] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector(state => state.createCategory);

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (success) {

            alert.success('Category created successfully');
            dispatch({ type: CREATE_CATEGORY_RESET })
            
        }

    }, [dispatch, alert, error, success])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);

        dispatch(createCategory(formData))
    }

    return (
        <Layout>
        <Fragment>
        <MetaData title={'New Category'} />

            <div className="row">
            <div className="col-12 col-md-2">
                    <Sidebar />
                </div>
                <div className="col">
                    <h4>category create page</h4>
                    <div className='ll'></div>
                    <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                    <div className="form-group">
                    <label >Name</label>
                 <input type="text" 
                    className="form-control" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{width :'50%',marginLeft:"24%"}}
                    autoFocus
                    required
            />
                        </div>
                        <div className='ll'></div>
            <button className="btn btn-primary btn-block py-2"
            type="submit"
            id="login_button"
            style={{width:'20%',marginLeft:"40%"}}
            disabled={loading ? true : false}
            >Save</button>
            </form>
                    </div>

            </div>
 

            </Fragment>
</Layout>


    )


}









export default CategoryCreate