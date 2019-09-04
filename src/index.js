import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DB_URL = process.env.DB_URL;
const DB_USER = process.env.DB_USER;
const DB_PWD = process.env.DB_PWD;

const startServer = async () => {
    const app = express();

    const server = new ApolloServer({ typeDefs, resolvers });
    server.applyMiddleware({ app });

    await mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        auth: {
            user: DB_USER,
            password: DB_PWD
        }
    })
    .then(() => {
        console.log("Database connected !");
    })
    .catch((err) => {
        console.log(err);
    })

    app.listen({ port: 4000 }, () => {
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    })
}

startServer();
