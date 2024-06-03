declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      DB_HOST: x;
      DB_PORT: 5432;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_DATABSE: string;
      NODE_ENV: string;
      POSTGRES_PASSWORD: string;
    }
  }
}
