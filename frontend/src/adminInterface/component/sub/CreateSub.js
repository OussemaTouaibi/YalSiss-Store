import React, { Fragment, useEffect, useState } from 'react'



import Layout from'../../../userInterface/components/shared/layout'
import Loader from '../../../userInterface/components/shared/loader'
import MetaData from '../../../userInterface/components/shared/metaData'
import Sidebar from '../sideBar/sideBar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { allCategories } from '../../../actions/categoryActions'
import { createSub, clearErrors } from '../../../actions/subActions'
import { CREATE_SUB_RESET } from '../../../constants/subConstants'

import '../category/category.scss'





const SubCreate = () => {

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");

    const alert = useAlert();
    const dispatch = useDispatch();

    const {loading, error, success } = useSelector(state => state.createSub);
    const { categories } = useSelector(state => state.allCategories);



    


    useEffect(() => {
      dispatch(allCategories());

      if (error) {
        alert.error(error);
        dispatch(clearErrors())
    }

    if (success) {

        alert.success('Sub category created successfully');
        dispatch({ type: CREATE_SUB_RESET })
        
    }

    }, [dispatch, success, error, alert]);

  
    




    const submitHandler = (e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.set('name', name);
      formData.set('category', category);

      dispatch(createSub({ name, parent: category }))
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
                    <h4>Sub category create page</h4>
    
                    <div className="form-group">
                                   
                                </div>
                                
                    <div className='ll'></div>
                    <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                    <div className="form-group">
                    <div className="form-group">
            <label>Parent category</label>
            <select
              name="category"
              className="form-control"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Please select</option>
              {categories.length > 0 &&
                categories.map((e) => (
                  <option key={e._id} value={e._id}>
                    {e.name}
                  </option>
                ))}
            </select>
          </div>

                    <label >Name</label>
                 <input type="text" 
                    className="form-control" 
                    style={{width :'50%',marginLeft:"24%"}}
                    autoFocus
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
            />
                        </div>
                        <div className='ll'></div>
            <button className="btn btn-primary btn-block py-2"
            type="submit"
            id="login_button"
            style={{width:'20%',marginLeft:"40%"}}

            >Save</button>
            </form>
                    </div>

            </div>
 

            </Fragment>
</Layout>


    )


}









export default SubCreate