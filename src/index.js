import express from 'express';
import { expressConfig } from './config/index.js';

import routes from './routes/index.js';

const app = express();

app.use('/', routes);

const serverHost = expressConfig.host;
const serverPort = expressConfig.port;

const server = async () => {
  app.listen(serverPort, () => {
    console.log(`Server is running on ${serverHost}:${serverPort}`);
  });
};

server();
