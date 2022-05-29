import { AuthData, Context, User } from "../../types"

export type GetUserByUsername = (_: any, args: {
    username: string;
}) => Promise<User | null>;

export type Login = (_: any, args: { 
    username: string, 
    password: string 
}) => Promise<AuthData>;

export type GetMe = (_:any, __: any, context: Context) => Promise<User | null>;