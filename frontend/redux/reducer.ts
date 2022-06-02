import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";
import { profileReducer } from "./profile/reducer";
import { RootState } from "./store";
import { userReducer } from "./user/reducer";

const combinedReducers = combineReducers({
    user: userReducer,
    profile: profileReducer
})
export default (state: any, action: any) => {
    // Making sure server and client are synced
    if(action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        }
        return nextState;
    } else {
        return combinedReducers(state, action);
    }
}