import { DataSource } from "typeorm"
import { User } from "./tables/User"
import { db_config } from "../enviroment"

const db = new DataSource({
    type: "mariadb",
    host: db_config.host,
    port: db_config.port,
    username: db_config.username,
    password: db_config.password,
    database: db_config.database,
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})
 
db.initialize()
    .then(() => {
        console.log("Database connected..")
    })
    .catch(error => {
        console.log(error)
    })

export default db