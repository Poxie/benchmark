import { User } from "../../types"

export type GetUserByUsername = (_: any, args: {
    username: string;
}) => Promise<User | null>;

type AuthData = {
    id: string;
    token: string;
    expiresIn: string;
}
export type Login = (_: any, args: { 
    username: string, 
    password: string 
}) => Promise<AuthData>;