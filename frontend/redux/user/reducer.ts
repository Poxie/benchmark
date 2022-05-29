import { SET_USER, SET_USER_LOADING, UserReducer } from "./types";

const initialState = {
    user: null,
    loading: true
}
export const userReducer: UserReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_USER: {
            return {
                ...state,
                user: action.payload,
                loading: false
            }
            break;
        }
        case SET_USER_LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        default: {
            return state;
        }
    }
}