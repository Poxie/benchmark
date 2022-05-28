export type User = {
    id: string;
    username: string;
    name: string;
}

export type AuthData = {
    id: string;
    token: string;
    expiresIn: string;
}