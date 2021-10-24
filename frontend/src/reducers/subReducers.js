import {
    CREATE_SUB_REQUEST,
    CREATE_SUB_SUCCESS,
    CREATE_SUB_FAIL,
    CREATE_SUB_RESET,

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

export const createSubReducer = (state = { sub : {} }, action) => {
    switch (action.type) {

        case CREATE_SUB_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CREATE_SUB_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                sub: action.payload.sub
            }

        case CREATE_SUB_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CREATE_SUB_RESET:
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

export const allSubsReducer = (state = { subs: [] }, action) => {
    switch (action.type) {

        case ALL_SUBS_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case ALL_SUBS_SUCCESS:
            return {
                ...state,
                loading: false,
                subs: action.payload
            }

        case ALL_SUBS_FAIL:
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

export const subReducer = (state = {}, action) => {
    switch (action.type) {

        
        case UPDATE_SUB_REQUEST:
        case DELETE_SUB_REQUEST:
            return {
                ...state,
                loading: true
            }

      case UPDATE_SUB_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }

        case DELETE_SUB_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_SUB_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case DELETE_SUB_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_SUB_FAIL:
        case DELETE_SUB_FAIL:
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
