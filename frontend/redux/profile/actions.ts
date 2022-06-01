import { Profile, SET_PROFILE } from "./types"


export const setProfile = (profile: Profile) => {
    return {
        type: SET_PROFILE,
        payload: profile
    }
}