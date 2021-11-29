import http from 'http';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

import app from './app';

import logger from './utils/logger';

const port = process.env.PORT || 3001;
const nodeEnv = process.env.NODE_ENV || 'development';
createConnection(nodeEnv === 'test' ? 'test' : 'default')
  .then(async (connection) => {
    logger.info(`Database connected ${connection.name}`);
  })
  .catch((err) => {
    logger.error(err);
  });

const server = http.createServer(app);

server.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});
