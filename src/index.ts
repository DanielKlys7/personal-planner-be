// import { FastifyZod } from 'fastify-zod';
// import models from '@/domain/entities';
import env from './infra/env';
import { startServer } from './infra/server';

// declare module 'fastify' {
//   interface FastifyInstance {
//     readonly zod: FastifyZod<typeof models>;
//   }
// }

startServer()
  .then(() => {
    console.log(`Server started successfully at ${env.PORT}`);
  })
  .catch((err) => {
    console.error('Error starting server:', err);
    process.exit(1);
  });
