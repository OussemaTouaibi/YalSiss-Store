import React, { Fragment, useEffect } from 'react'

import { MDBDataTable } from 'mdbreact'

import Layout from'../../../userInterface/components/shared/layout'
import Loader from '../../../userInterface/components/shared/loader'
import MetaData from '../../../userInterface/components/shared/metaData'
import Sidebar from '../sideBar/sideBar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { allSubs, deleteSub, clearErrors } from '../../../actions/subActions'
import { DELETE_SUB_RESET } from '../../../constants/subConstants'

const ListSub = () => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, subs } = useSelector(state => state.allSubs);
    const { isDeleted } = useSelector(state => state.sub)

    useEffect(() => {
        dispatch(allSubs());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('Sub Category deleted successfully');
            dispatch({ type: DELETE_SUB_RESET })
        }

    }, [dispatch, alert, error, isDeleted])

    const deleteSubHandler = (id) => {
        dispatch(deleteSub(id))
    }

    const setSubs = () => {
        const data = {
            columns: [
                {
                    label: 'Sub Category ID',
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

        subs.forEach(sub => {
            data.rows.push({
                id: sub._id,
                name: sub.name,
                slug: sub.slug,
                

                actions: <Fragment>
                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteSubHandler(sub._id)}>
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
            <MetaData title={'All Sub Categories'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">All Sub Categories</h1>

                        {loading ? <Loader /> : (
                            <MDBDataTable
                                data={setSubs()}
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

export default ListSub