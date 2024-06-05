import Fastify from 'fastify';
import { buildJsonSchemas, register } from 'fastify-zod';

import models from '../domain/entities';
import { UserServiceRoutes } from '../routes/User.routes';
import { configureDatabase } from './database/db-config';
import env from './env';

export const startServer = async () => {
  const server = Fastify();

  configureDatabase(server);

  await register(server, {
    jsonSchemas: buildJsonSchemas(models),
    swaggerOptions: {
      openapi: {
        openapi: '3.0.0',
        info: {
          title: 'Test swagger',
          description: 'Testing the Fastify swagger API',
          version: '0.1.0',
        },
        servers: [
          {
            url: 'http://localhost:3000',
            description: 'Development server',
          },
        ],
        tags: [
          { name: 'user', description: 'User related end-points' },
          { name: 'code', description: 'Code related end-points' },
        ],
        components: {
          securitySchemes: {
            apiKey: {
              type: 'apiKey',
              name: 'apiKey',
              in: 'header',
            },
          },
        },
        externalDocs: {
          url: 'https://swagger.io',
          description: 'Find more info here',
        },
      },
    },
    swaggerUiOptions: {
      routePrefix: '/documentation',
      uiConfig: {
        docExpansion: 'full',
        deepLinking: false,
      },

      transformSpecificationClone: true,
    },
  });

  await server.register(UserServiceRoutes, { prefix: 'auth' });

  server.get('/users', async (request, reply) => {
    reply.send(['user1', 'user2']);
  });

  await server.listen({ port: env.PORT, host: '0.0.0.0' });

  return server;
};
