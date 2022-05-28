import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './schema/resolvers';
import typeDefs from './schema/typeDefs';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import auth, { ExtendedRequest } from './middleware/auth';
import cors from 'cors';
import entities from './entities';
dotenv.config();

const app = express();
app.use(cors({ origin: process.env.FRONTEND_ORIGIN }));

(async () => {
    // MySQL connection
    new DataSource({
        type: 'mysql',
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_PORT || ''),
        database: process.env.MYSQL_DATABASE,
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        synchronize: true,
        logging: true,
        entities
    }).initialize();

    // Apollo Server setup
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }: {req: ExtendedRequest}) => ({
            userId: req.userId,
        })
    });

    // Starting server
    await server.start();

    // Using auth middleware
    app.use(auth as any);
    
    // Combining app and server and starting it
    server.applyMiddleware({ app });
    app.listen({ port: process.env.PORT }, () => console.log(`Server running on port ${process.env.PORT}`));
})();