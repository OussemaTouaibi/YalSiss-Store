import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

import Layout from'../../../userInterface/components/shared/layout'
import Loader from '../../../userInterface/components/shared/loader'
import MetaData from '../../../userInterface/components/shared/metaData'
import Sidebar from '../sideBar/sideBar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { allCategories, deleteCategory, clearErrors } from '../../../actions/categoryActions'
import { DELETE_CATEGORY_RESET } from '../../../constants/categoryConstants'

const CategoryList = ({ history }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, categories } = useSelector(state => state.allCategories);
    const { isDeleted } = useSelector(state => state.category)

    useEffect(() => {
        dispatch(allCategories());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('Category deleted successfully');
            history.push('/admin/categories');
            dispatch({ type: DELETE_CATEGORY_RESET })
        }

    }, [dispatch, alert, error, isDeleted, history])

    const deleteCategoryHandler = (id) => {
        dispatch(deleteCategory(id))
    }

    const setCategories = () => {
        const data = {
            columns: [
                {
                    label: 'Category ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Slug',
                    field: 'slug',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                },
            ],
            rows: []
        }

        categories.forEach(Category => {
            data.rows.push({
                id: Category._id,
                name: Category.name,
                slug: Category.slug,
                

                actions: <Fragment>
                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteCategoryHandler(Category._id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </Fragment>
            })
        })

        return data;
    }


    return (
    
        <Layout>
        <Fragment>
            <MetaData title={'All Categories'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">All Categories</h1>

                        {loading ? <Loader /> : (
                            <MDBDataTable
                                data={setCategories()}
                                className="px-3"
                                bordered
                                striped
                                hover
                            />
                        )}

                    </Fragment>
                </div>
            </div>

        </Fragment>
        </Layout>
    )
}

export default CategoryList