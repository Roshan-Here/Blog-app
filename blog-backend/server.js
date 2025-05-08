import express from "express";
import http from "http";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDb from "./utils/db.js";
import { resolvers } from "./graphql/resolvers.js";
import { typeDefs } from "./graphql/schema.js";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

dotenv.config();

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
  
  app.use(
    "/graphql", 
    cors(), 
    express.json(), 
    expressMiddleware(server)
  );
  
  app.get("/", (req, res) => {
    res.send("GraphQL API is running. Navigate to /graphql to use the GraphQL playground.");
  });
  
  const PORT = process.env.PORT || 3000;
  
  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  
  console.log(`Server is running on port ${PORT}`);
}

startApolloServer();

export default app;