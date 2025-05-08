import express from "express";
import http from "http";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDb from "./utils/db.js";
import { resolvers } from "./graphql/resolvers.js";
import { typeDefs } from "./graphql/schema.js";
import { expressMiddleware } from "@apollo/server/express4";

dotenv.config();

import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

const app = express();
const httpServer = http.createServer(app);

connectDb();

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use("/graphql", cors(), express.json(), expressMiddleware(server));


  const PORT = process.env.PORT || 5000;
  
  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  
  console.log(`Server is running on port ${PORT}`);
}

startApolloServer();
