declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            NEXT_PUBLIC_WEBSITE_NAME: string;
            NEXT_PUBLIC_WEBSITE_DESCRIPTION: string;
            NEXT_PUBLIC_CONTACT_EMAIL: string;
        }
    }
}

export {};