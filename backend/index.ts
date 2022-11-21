import express, { Express } from "express";
import cors from "cors";

import "./databases/database";
import "./databases/cache";

import { server_port, frontend_url } from "./enviroment";
import router from "./routes";

const app: Express = express();

app.use(express.json());
app.use(cors({ origin: [`${frontend_url}`] }));

app.use(router);

app.listen(server_port, () => {
  console.log(`Server is running on port ${server_port}`);
});
