export type User = {
    id: string;
    username: string;
    name?: string;
}
export type Score = {
    id: string;
    userId: string;
    gameId: string;
    score: number;
}
export type ScoreExtended = Score & {
    position: number;
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