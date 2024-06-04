import env from '@/infra/env';
import { startServer } from '@/infra/server';

startServer()
  .then(() => {
    console.log(`Server started successfully at ${env.PORT}`);
  })
  .catch((err) => {
    console.error('Error starting server:', err);
    process.exit(1);
  });
