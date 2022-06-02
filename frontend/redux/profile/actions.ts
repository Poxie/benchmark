import { GameStats, Profile, SET_PROFILE, SET_PROFILE_GAME_STATS } from "./types"

export const setProfile = (profile: Profile) => ({
    type: SET_PROFILE,
    payload: profile
})
export const setProfileGameStats = (stats: GameStats) => ({
    type: SET_PROFILE_GAME_STATS,
    payload: stats
})