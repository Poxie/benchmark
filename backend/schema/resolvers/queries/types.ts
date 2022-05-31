import { AuthData, Context, ProfileOverview, Score, User } from "../../types"

// User
export type GetUserByUsername = (_: any, args: {
    username: string;
}) => Promise<User | null>;

export type Login = (_: any, args: { 
    username: string, 
    password: string 
}) => Promise<AuthData>;

export type GetMe = (_:any, __: any, context: Context) => Promise<User | null>;


// Scores
export type GetUserHighScore = (_:any, args: {
    id: string;
    gameId: string;
}) => Promise<Score | null>;

export type GetUserScores = (_:any, args: {
    id: string;
    gameId: string;
}) => Promise<Score[]>

export type GetGameLeaderboard = (_:any, args: {
    gameId: string;
}) => Promise<Score[]>


// Profile
export type GetProfileOverview = (_: any, args: {
    userId: string;
}) => Promise<ProfileOverview | null>;