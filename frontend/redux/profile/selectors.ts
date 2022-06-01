import { createSelector } from "reselect";
import { RootState } from "../store";

export const selectProfileIsLoading = (state: RootState) => state.profile.loading;
export const selectProfile = (state: RootState) => state.profile.profile;
export const selectProfileIdentity = createSelector(
    [selectProfile],
    (profile) => {
        if(!profile) return null;

        const { id, username, name } = profile.user;
        return {
            id,
            username,
            name
        }
    }
)