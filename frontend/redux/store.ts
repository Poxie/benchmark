import { $CombinedState, configureStore } from "@reduxjs/toolkit";
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
}
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;