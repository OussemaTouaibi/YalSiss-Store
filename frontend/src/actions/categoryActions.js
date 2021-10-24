import axios from "axios";

import {
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_RESET,
    CREATE_CATEGORY_FAIL,

    DISPLAY_CATEGORYSUBS_REQUEST,
    DISPLAY_CATEGORYSUBS_SUCCESS,
    DISPLAY_CATEGORYSUBS_RESET,
    DISPLAY_CATEGORYSUBS_FAIL,

    ONE_CATEGORIES_REQUEST,
    ONE_CATEGORIES_SUCCESS,
    ONE_CATEGORIES_FAIL,

    DELETE_CATEGORY_REQUEST,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_RESET,
    DELETE_CATEGORY_FAIL,

    ALL_CATEGORIES_REQUEST,
    ALL_CATEGORIES_SUCCESS,
    ALL_CATEGORIES_FAIL,
    
    UPDATE_CATEGORY_REQUEST,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_RESET,
    UPDATE_CATEGORY_FAIL,
    CLEAR_ERRORS
} from '../constants/categoryConstants'


  export const createCategory = (category) => async (dispatch) => {
    try {

        dispatch({ type: CREATE_CATEGORY_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } =  await axios.post('/api/v1/admin/category/new', category, config)

        dispatch({
            type: CREATE_CATEGORY_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_CATEGORY_FAIL,
            payload: error.response.data.message
        })
    }
}
   


export const deleteCategory = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_CATEGORY_REQUEST })

        const { data } = await axios.delete(`/api/v1/category/${id}`)

        dispatch({
            type: DELETE_CATEGORY_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_CATEGORY_FAIL,
            payload: error.response.data.message
        })
    }
}


export const getCategories = async () =>
await axios.get('/api/v1/categories')



export const allCategories = () => async (dispatch) => {
    try {

        dispatch({ type:  ALL_CATEGORIES_REQUEST })

        const { data } = await axios.get('/api/v1/categories')

        dispatch({
            type: ALL_CATEGORIES_SUCCESS,
            payload: data.categories
        })

    } catch (error) {
        dispatch({
            type: ALL_CATEGORIES_FAIL,
            payload: error.response.data.message
        })
    }
}



export const UpdateCategory = (slug, categoryData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_CATEGORY_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/category/${slug}`, categoryData, config)

        dispatch({
            type: UPDATE_CATEGORY_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_CATEGORY_FAIL,
            payload: error.response.data.message
        })
    }
}


export const getCategoryy = async (slug) =>
  await axios.get(`/api/v1/category/${slug}`);

export const getCategory = (slug) => async (dispatch) => {
    try {

        dispatch({ type: ONE_CATEGORIES_REQUEST })

        const { data } = await axios.get(`/api/v1/category/${slug}`)

        dispatch({
            type: ONE_CATEGORIES_SUCCESS,
            payload: data.category,
          
        })

    } catch (error) {
        dispatch({
            type: ONE_CATEGORIES_FAIL,
            payload: error.response.data.message
        })
    }
}



export const getCategorySubs = async (_id) =>

await axios.get(`/api/v1/category/subs/${_id}`);



export const getProductsByCategory = async (slug) =>

await axios.get(`/api/v1/category/${slug}`);











  // Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}