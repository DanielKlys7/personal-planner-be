import "reflect-metadata";
import * as dotenv from "dotenv";
import Fastify from "fastify";
import { configureDatabase } from "./infra/database/db-config";
import env from "../config/env";

dotenv.config();

async function startServer() {
  const server = Fastify();

  configureDatabase(server);

  await server.listen({ port: env.PORT });
}

startServer()
  .then(() => {
    console.log(`Server started successfully at ${env.PORT}`);
  })
  .catch((err) => {
    console.error("Error starting server:", err);
    process.exit(1);
  });
