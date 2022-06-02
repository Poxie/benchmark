import { Profile, ProfileReducer, SET_PROFILE, SET_PROFILE_GAME_STATS } from "./types";

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
        case SET_PROFILE_GAME_STATS: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    gameStats: {
                        ...(state.profile?.gameStats || {}),
                        [action.payload.gameId]: action.payload
                    }
                } as Profile
            }
        }
        default: {
            return state;
        }
    }
}