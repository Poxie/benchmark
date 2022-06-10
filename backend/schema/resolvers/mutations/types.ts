import { Context, Score, User } from "../../types";

export type UpdateUser = (_: any, args: {
    input: {
        id: string;
        username?: string;
        currentPassword?: string;
        newPassword?: string;
    }
}) => Promise<User>;

export type CreateScore = (_:any, args: {
    score: number;
    userId: string;
    gameId: string;
}, context: Context) => Promise<Score>;