import {
    FETCH_UNSPLASH_DATA_START,
    FETCH_UNSPLASH_DATA_SUCCESS,
    FETCH_UNSPLASH_DATA_FAILURE
} from '../actions';

const initialState = {
    photos: [],
    isLoading: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_UNSPLASH_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_UNSPLASH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                photos: action.payload,
                error: ''
            };
        default:
            return state;
    }
};
