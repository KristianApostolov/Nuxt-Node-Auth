import "dotenv/config"

type Enviroment = {
    host: string,
    port: number,
    username: string,
    password: string,
    database: string
}

export const server_port = process.env.PORT

export const db_config: Enviroment = {
    host: process.env.MARIA_HOST,
    port: Number(process.env.MARIA_PORT),
    username: process.env.MARIA_USER,
    password: process.env.MARIA_PASSWORD,
    database: process.env.MARIA_DB,
}

export const redis_dsn = process.env.REDIS_DSN
