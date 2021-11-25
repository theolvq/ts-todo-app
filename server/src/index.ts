import http from 'http';

import app from './app';
import logger from './utils/logger';

const port = process.env.PORT || 3001;

const server = http.createServer(app);

server.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
