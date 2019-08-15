import axios from "axios";

export const FETCH_UNSPLASH_DATA_START = "FETCH_UNSPLASH_DATA_START";
export const FETCH_UNSPLASH_DATA_SUCCESS = "FETCH_UNSPLASH_DATA_SUCCESS";
export const FETCH_UNSPLASH_DATA_FAILURE = "FETCH_UNSPLASH_DATA_FAILURE";

export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_UNSPLASH_DATA_START });
        axios
            .get("https://picsum.photos/v2/list?page=2&limit=21")
            .then(res => { console.log(res.data); return res })
            .then(res => {
                // res.data.data
                dispatch({ type: FETCH_UNSPLASH_DATA_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: FETCH_UNSPLASH_DATA_FAILURE, payload: err.response });
            });
    };
};
