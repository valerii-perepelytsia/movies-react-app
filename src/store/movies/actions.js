import * as types from './types';

export const fetchBegin = () => ({
    type: types.FETCH_BEGIN
});

export const fetchSuccessPopular = items => ({
    type: types.FETCH_SUCCESS_POPULAR,
    payload: { items }
});

export const fetchSuccessTopRated = items => ({
    type: types.FETCH_SUCCESS_TOP_RATED,
    payload: { items }
});

export const fetchSuccessSearch = items => ({
    type: types.FETCH_SUCCESS_SEARCH,
    payload: { items }
});

export const fetchSuccessDetails = items => ({
    type: types.FETCH_SUCCESS_DETAILS,
    payload: { items }
});

export const fetchFailure = error => ({
    type: types.FETCH_FAILURE,
    payload: { error }
});

export function fetchData(url, mode, query="") {
    return dispatch => {
        dispatch(fetchBegin());
        fetch(url + query)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                switch(mode) {
                    case "popular":
                        dispatch(fetchSuccessPopular(json.results));
                        return json.results;
                    case "top_rated":
                        dispatch(fetchSuccessTopRated(json.results));
                        return json.results;
                    case "search":
                        dispatch(fetchSuccessSearch(json.results));
                        return json.results;
                    case "details":
                        dispatch(fetchSuccessDetails(json));
                        return json;
                    default:
                        return json.results;
                }
            })
            .catch(error => dispatch(fetchFailure(error)));
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

