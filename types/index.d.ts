import { FastifyZod } from 'fastify-zod';

import models from '@/domain/entities';

declare module 'fastify' {
  interface FastifyInstance {
    readonly zod: FastifyZod<typeof models>;
  }
}
