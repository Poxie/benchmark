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
export type Game = {
    id: string;
    title: string;
    description: string;
}
export type ProfileOverview = {
    userId: string;
    user?: User;
    highScores: Score[];
    totalScore: number;
    differentGamesPlayed: number;
    duelWins: number;
}
export type ProfileGameStats = {
    userId: string;
    user?: User;
    gameId: string;
    game?: Game;
    highScore: Score;
    scores: Score[];
    gamesPlayed: number;
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