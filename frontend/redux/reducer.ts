import { combineReducers } from "redux";
import { profileReducer } from "./profile/reducer";
import { userReducer } from "./user/reducer";

export default combineReducers({
    user: userReducer,
    profile: profileReducer
});