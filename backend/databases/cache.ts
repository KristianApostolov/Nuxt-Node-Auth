import { createClient } from "redis"
import { redis_dsn } from "../enviroment"

const redis = createClient({url: redis_dsn})

redis.connect()

redis.on("ready", ()=>console.log("Redis connected.."))

redis.on("error", error=>console.log(error))

export default redis