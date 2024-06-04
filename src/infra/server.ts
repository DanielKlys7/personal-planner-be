import Fastify from "fastify";
import { configureDatabase } from "./database/db-config";
import env from "./env";

export const startServer = async () => {
  const server = Fastify();

  configureDatabase(server);

  await server.listen({ port: env.PORT });

  return server;
};
