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
export const selectProfileStats = createSelector(
    [selectProfile],
    profile => {
        if(!profile) return null;

        const { totalScore, differentGamesPlayed, duelWins } = profile;
        return {
            totalScore,
            differentGamesPlayed,
            duelWins
        }
    }
)
export const selectProfileHighScores = createSelector(
    [selectProfile],
    profile => {
        if(!profile) return null;

        return profile.highScores;
    }
)