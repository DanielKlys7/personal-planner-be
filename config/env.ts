import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: Number(process.env.PORT),
  DB_HOST: process.env.POSTGRES_HOST,
  DB_PORT: process.env.POSTGRES_PORT,
  DB_USERNAME: process.env.POSTGRES_USERNAME,
  DB_PASSWORD: process.env.POSTGRES_PASSWORD,
  DB_DATABASE: process.env.POSTGRES_DATABASE,
  NODE_ENV: process.env.NODE_ENV,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
};
