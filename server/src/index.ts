import http from 'http';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

import app from './app';

import logger from './utils/logger';

const port = process.env.PORT || 3001;

createConnection()
  .then(async () => {
    const server = http.createServer(app);

    server.listen(port, () => {
      logger.info(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    logger.error(err);
  });
