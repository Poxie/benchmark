import { createSelector } from "reselect";
import { RootState } from "../store";

export const selectUserIsLoading = (state: RootState) => state.user.loading;
export const selectUser = (state: RootState) => state.user.user;
export const selectUserInfo = createSelector(
    [selectUser],
    user => {
        if(!user) return null;

        const { id, username, name } = user;
        return {
            id,
            username,
            name
        }
    }
)