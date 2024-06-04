import { FastifyInstance } from 'fastify';
import plugin from 'typeorm-fastify-plugin';

import env from '@/infra/env';

import { User } from '@/domain/entities/User.entity';

export function configureDatabase(server: FastifyInstance) {
  try {
    server.register(plugin, {
      namespace: 'typeorm',
      type: 'postgres',
      host: env.DB_HOST,
      port: parseInt(env.DB_PORT || '5432'),
      username: env.DB_USERNAME,
      password: env.DB_PASSWORD,
      database: env.DB_DATABASE,
      synchronize: env.NODE_ENV === 'dev' ? true : false,
      logging: env.NODE_ENV === 'dev' ? true : false,
      migrations: [__dirname + '/migration/*.ts'],
      subscribers: [],
      migrationsRun: env.NODE_ENV === 'dev' ? false : false,
      entities: [User],
    });
  } catch (e) {
    console.error(e);
  }
}
