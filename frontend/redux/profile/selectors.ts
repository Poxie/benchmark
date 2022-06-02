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
export const selectAllProfileGameStats = (state: RootState) => state.profile.profile?.gameStats;
export const selectProfileGameStatId = (state: RootState, statId: string) => statId;
export const selectProfileGameStats = createSelector(
    [selectAllProfileGameStats, selectProfileGameStatId],
    (stats, statId) => {
        if(!stats || !stats[statId]) return null;
        return stats[statId];
    }
)
export const selectProfileGameStatsGame = createSelector(
    [selectProfileGameStats],
    stats => stats?.game
)
export const selectProfileGameStatsMain = createSelector(
    [selectProfileGameStats],
    stats => {
        if(!stats) return null;

        const { highScore, gamesPlayed } = stats;
        return {
            highScore,
            gamesPlayed
        }
    }
)
export const selectProfileGameStatsScores = createSelector(
    [selectProfileGameStats],
    stats => {
        if(!stats) return null;
        return stats.scores;
    }
)