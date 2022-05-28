import { User } from "../../types"

export type GetUserByUsername = (_: any, args: {
    username: string;
}) => Promise<User | null>;