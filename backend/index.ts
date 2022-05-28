import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './schema/resolvers';
import typeDefs from './schema/typeDefs';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import entities from './entities';
dotenv.config();

const app = express();

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
        resolvers
    });

    await server.start();

    server.applyMiddleware({ app });
    app.listen({ port: process.env.PORT }, () => console.log(`Server running on port ${process.env.PORT}`));
})();