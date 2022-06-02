import { Score } from "../../components/game-components/Leaderboard";
import { User } from "../user/types";

export type ProfileState = {
    loading: boolean;
    profile: Profile | null;
}
export type Profile = {
    highScores: HighScore[];
    totalScore: number;
    duelWins: number;
    differentGamesPlayed: number;
    user: User;
    gameStats?: {
        [x: string]: GameStats;
    }
}
export type HighScore = {
    score: number;
    position: number;
    game: Game;
}
export type Game = {
    title: string;
    id: string;
}
export type GameStats = {
    game: Game;
    gamesPlayed: number;
    scores: Score[];
    highScore: Score;
}
type ProfileAction = {
    type: 'SET_PROFILE' | 'SET_PROFILE_GAME_STATS';
    payload: any;
}
export type ProfileReducer = (state: ProfileState, action: ProfileAction) => ProfileState;

// Actions
export const SET_PROFILE = 'SET_PROFILE';
export const SET_PROFILE_GAME_STATS = 'SET_PROFILE_GAME_STATS';