import {
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_FAIL,
    CREATE_CATEGORY_RESET,

    ONE_CATEGORYS_REQUEST,
    ONE_CATEGORYS_SUCCESS,
    ONE_CATEGORYS_FAIL,

    DISPLAY_CATEGORYSUBS_REQUEST,
    DISPLAY_CATEGORYSUBS_SUCCESS,
    DISPLAY_CATEGORYSUBS_RESET,
    DISPLAY_CATEGORYSUBS_FAIL,

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

export const createCategoryReducer = (state = { category: {} }, action) => {
    switch (action.type) {

        case CREATE_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CREATE_CATEGORY_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                category: action.payload.category
            }

        case CREATE_CATEGORY_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CREATE_CATEGORY_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const allCategoriesReducer = (state = { categories: [] }, action) => {
    switch (action.type) {

        case ALL_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case ALL_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload
            }

        case ALL_CATEGORIES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const categoryReducer = (state = {}, action) => {
    switch (action.type) {

        
        case UPDATE_CATEGORY_REQUEST:
        case DELETE_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true
            }

      case UPDATE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }

        case DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_CATEGORY_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case DELETE_CATEGORY_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_CATEGORY_FAIL:
        case DELETE_CATEGORY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const getCategorySubsReducer = (state = { subs: {} }, action) => {
    switch (action.type) {

        case DISPLAY_CATEGORYSUBS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DISPLAY_CATEGORYSUBS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }

        case DISPLAY_CATEGORYSUBS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}