import axios from "axios";

import {
    CREATE_SUB_REQUEST,
    CREATE_SUB_SUCCESS,
    CREATE_SUB_RESET,
    CREATE_SUB_FAIL,

    ONE_SUBS_REQUEST,
    ONE_SUBS_SUCCESS,
    ONE_SUBS_FAIL,

    DELETE_SUB_REQUEST,
    DELETE_SUB_SUCCESS,
    DELETE_SUB_RESET,
    DELETE_SUB_FAIL,

    ALL_SUBS_REQUEST,
    ALL_SUBS_SUCCESS,
    ALL_SUBS_FAIL,
    
    UPDATE_SUB_REQUEST,
    UPDATE_SUB_SUCCESS,
    UPDATE_SUB_RESET,
    UPDATE_SUB_FAIL,
    CLEAR_ERRORS
} from '../constants/subConstants'


  export const createSub = (sub) => async (dispatch) => {
    try {

        dispatch({ type: CREATE_SUB_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } =  await axios.post('/api/v1/admin/sub/new', sub, config)

        dispatch({
            type: CREATE_SUB_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_SUB_FAIL,
            payload: error.response.data.message
        })
    }
}
   


export const deleteSub = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_SUB_REQUEST })

        const { data } = await axios.delete(`/api/v1/sub/${id}`)

        dispatch({
            type: DELETE_SUB_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_SUB_FAIL,
            payload: error.response.data.message
        })
    }
}



export const allSubs = () => async (dispatch) => {
    try {

        dispatch({ type:  ALL_SUBS_REQUEST })

        const { data } = await axios.get('/api/v1/admin/subs')

        dispatch({
            type: ALL_SUBS_SUCCESS,
            payload: data.subs
        })

    } catch (error) {
        dispatch({
            type: ALL_SUBS_FAIL,
            payload: error.response.data.message
        })
    }
}



export const UpdateSub = (slug, subData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_SUB_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/sub/${slug}`, subData, config)

        dispatch({
            type: UPDATE_SUB_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_SUB_FAIL,
            payload: error.response.data.message
        })
    }
}



export const getSub = (slug) => async (dispatch) => {
    try {

        dispatch({ type: ONE_SUBS_REQUEST })

        const { data } = await axios.get(`/api/v1/sub/${slug}`)

        dispatch({
            type: ONE_SUBS_SUCCESS,
            payload: data.sub
        })

    } catch (error) {
        dispatch({
            type: ONE_SUBS_FAIL,
            payload: error.response.data.message
        })
    }
}






  // Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}