import { SET_USER, UserReducer } from "./types";

const initialState = {
    user: null,
    loading: true
}
export const userReducer: UserReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_USER: {
            return {
                ...state,
                user: action.payload
            }
            break;
        }
        default: {
            return state;
        }
    }
}