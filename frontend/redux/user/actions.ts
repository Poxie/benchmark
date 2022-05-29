import { User, SET_USER, SET_USER_LOADING } from "./types";

export const setUser = (user: User) => ({
    type: SET_USER,
    payload: user
})
export const setUserLoading = (state: boolean) => ({
    type: SET_USER_LOADING,
    payload: state
})