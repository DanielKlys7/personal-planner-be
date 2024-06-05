import { FastifyInstance, FastifyPluginCallback } from 'fastify';

import { UserServiceController } from '../controllers/User.controller';

export const UserServiceRoutes: FastifyPluginCallback = (fastify: FastifyInstance, _opts, done) => {
  const userServiceController = new UserServiceController();

  fastify.get('/users', async (request, reply) => {
    reply.send(['user1', 'user2']);
  });

  fastify.zod.post('/signup', { operationId: 'signupUser', body: 'createUserSchema', reply: 'userSchema' }, async (request, reply) => {
    const user = await userServiceController.signup(request.body);
    reply.send(user);
  });

  fastify.zod.post('/login', { operationId: 'loginUser', body: 'createUserSchema', reply: 'userSchema' }, async (request, reply) => {
    const user = await userServiceController.signup(request.body);
    reply.send(user);
  });

  done();
};
