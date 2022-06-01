import { ProfileReducer, SET_PROFILE } from "./types";

const initialState = {
    loading: true,
    profile: null
}
export const profileReducer: ProfileReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                loading: false,
                profile: action.payload
            }
        }
        default: {
            return state;
        }
    }
}