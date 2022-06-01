import { $CombinedState, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ProfileState } from "./profile/types";
import reducer from "./reducer";
import { UserState } from "./user/types";

export const store = configureStore({
    reducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = {
    readonly [$CombinedState]?: undefined;
} & {
    user: UserState;
    profile: ProfileState
}
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;