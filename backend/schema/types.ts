export type User = {
    id: string;
    username: string;
    name?: string;
}
export type Score = {
    id: string;
    userId: string;
    gameId: string;
    score: string | number;
}
export type ScoreExtended = Score & {
    position: number;
}
export type ProfileOverview = {
    userId: string;
    user?: User;
    highScores: Score[];
    totalScore: number;
    differentGamesPlayed: number;
    duelWins: number;
}

export type AuthData = {
    id: string;
    token: string;
    expiresIn: string;
}

export type Context = {
    userId: string;
    auth: boolean;
}