import { AuthData, User } from "../../types"

export type GetUserByUsername = (_: any, args: {
    username: string;
}) => Promise<User | null>;

export type Login = (_: any, args: { 
    username: string, 
    password: string 
}) => Promise<AuthData>;