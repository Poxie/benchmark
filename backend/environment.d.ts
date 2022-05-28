declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number;
            MYSQL_HOST: string;
            MYSQL_PORT: string;
            MYSQL_USERNAME: string;
            MYSQL_PASSWORD: string;
            MYSQL_DATABASE: string;
            BCRYPT_SALT_ROUNDS: number;
            JWT_SECRET_KEY: string;
            FRONTEND_ORIGIN: string;
        }
    }
}

export {};