import { Context, Score } from "../../types";

export type CreateScore = (_:any, args: {
    score: number;
    userId: string;
    gameId: string;
}, context: Context) => Promise<Score>;