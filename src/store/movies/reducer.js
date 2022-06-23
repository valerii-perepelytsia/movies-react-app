import * as types from './types';

const initialState = {
    search: [],
    popular: [],
    top_rated: [],
    details: [],
    loading: false,
    error: null
};

export default function movies_app(state = initialState, action) {
    switch(action.type) {
        case types.FETCH_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case types.FETCH_SUCCESS_SEARCH:
            return {
                ...state,
                loading: false,
                search: action.payload.items
            };
        case types.FETCH_SUCCESS_POPULAR:
            return {
                ...state,
                loading: false,
                popular: action.payload.items
            };
        case types.FETCH_SUCCESS_TOP_RATED:
            return {
                ...state,
                loading: false,
                top_rated: action.payload.items
            };
        case types.FETCH_SUCCESS_DETAILS:
            return {
                ...state,
                loading: false,
                details: action.payload.items
            };
        case types.FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        default:
            return state;
    }
}