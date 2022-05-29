export type User = {
    id: string;
    username: string;
    name?: string;
}
export type UserState = {
    loading: boolean;
    user: null | User;
}
type UserAction = {
    type: 'SET_USER' | 'SET_USER_LOADING',
    payload: any
}
export type UserReducer = (state: UserState, action: UserAction) => UserState;

export const SET_USER = 'SET_USER';
export const SET_USER_LOADING = 'SET_USER_LOADING';