import express from "express";
import { expressConfig } from "./config/index.js";

import middlewares from "./middlewares/index.js";
import routes from "./routes/index.js";

const app = express();

app.use(middlewares);

app.use("/", routes);

const serverHost = expressConfig.host;
const serverPort = expressConfig.port;

const server = async () => {
    app.listen(serverPort, () => {
        console.log(`Server is running on ${serverHost}:${serverPort}`);
    });
};

server();
