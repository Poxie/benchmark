import { User } from "../user/types";

export type ProfileState = {
    loading: boolean;
    profile: Profile | null;
}
export type Profile = {
    highScores: HighScore[];
    totalScore: number;
    duelsWins: number;
    differentGamesPlayed: number;
    user: User;
}
export type HighScore = {
    score: number;
    position: number;
}
type ProfileAction = {
    type: 'SET_PROFILE';
    payload: any;
}
export type ProfileReducer = (state: ProfileState, action: ProfileAction) => ProfileState;

// Actions
export const SET_PROFILE = 'SET_PROFILE';