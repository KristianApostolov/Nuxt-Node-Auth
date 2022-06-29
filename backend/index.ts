import express, { Request, Response } from "express"
import "./databases/database"
import { server_port } from "./enviroment"

const app = express()
app.use(express.json())

app.get('/', (res: Response) => {
    res.send({ message: 'Hello World' })
})

app.listen(server_port, () => {
    console.log(`Server is running on port ${server_port}`)
})