import "dotenv/config";
import { Enviroment } from "./types";

export const server_port = process.env.PORT;

export const frontend_url = process.env.FRONTEND_URL;

export const db_config: Enviroment = {
  host: process.env.MARIA_HOST,
  port: Number(process.env.MARIA_PORT),
  username: process.env.MARIA_USER,
  password: process.env.MARIA_PASSWORD,
  database: process.env.MARIA_DB,
};

export const redis_dsn = process.env.REDIS_DSN;
