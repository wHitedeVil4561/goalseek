import express from "express";
import http from "http";
import "dotenv/config";
import { CONFIG } from "./app/constant/environment.constant.js";
import cors from "cors";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs } from "./app/graphql/schemas/index.js";
import { resolvers } from "./app/graphql/resolvers/index.js";
import db from "./app/models/index.js";
const app = express();
const apolloServer = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  status400ForVariableCoercionErrors:true
});
apolloServer.start().then(() => {
  app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressMiddleware(apolloServer, {
      context: ({ req }) => {
        console.log(req.headers);
        const bearerToken = req.headers["authorization"];
        return { bearerToken, db };
      },
    })
  );

  http.createServer(app).listen(CONFIG.PORT, () => {
    console.log(`Server is up on ${CONFIG.PORT} running successfully.`);
  });
});
