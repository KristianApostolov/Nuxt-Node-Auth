import { DataSource, EntityManager } from "typeorm"
import { User } from "./tables/User"
import { db_config } from "../enviroment"

const db_client: DataSource = new DataSource({
    type: "mariadb",
    host: db_config.host,
    port: db_config.port,
    username: db_config.username,
    password: db_config.password,
    database: db_config.database,
    synchronize: true,
    logging: false,
    entities: [User],
    subscribers: [],
    migrations: [],
})
 
db_client.initialize()
    .then(() => {
        console.log("Database connected..")
    })
    .catch(error => {
        console.log(error)
    })

const db: EntityManager = db_client.manager

export default db