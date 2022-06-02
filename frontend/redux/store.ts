import { $CombinedState, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ProfileState } from "./profile/types";
import reducer from "./reducer";
import { UserState } from "./user/types";

const makeStore = () => configureStore({
    reducer
});
export const wrapper = createWrapper(makeStore, { debug: true });

// Store type
type Store = ReturnType<typeof makeStore>;

// Types based on store
export type RootState = {
    readonly [$CombinedState]?: undefined;
} & {
    user: UserState;
    profile: ProfileState
}
export type AppDispatch = Store['dispatch'];

// Hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;