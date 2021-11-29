import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { createConnection } from 'typeorm';
import todoRouter from './routes/todos';
import boardRouter from './routes/boards';
import boardColumnRouter from './routes/boardColumns';
import cardRouter from './routes/cards';
import logger from './utils/logger';

const app: Application = express();
const nodeEnv = process.env.NODE_ENV || 'development';
logger.info(`Node environment: ${nodeEnv}`);
const db = nodeEnv === 'test' ? 'test' : 'development';
export const connection = createConnection(db)
  .then(async (con) => {
    logger.info(`Database connected to ${con.name}`);
  })
  .catch((err) => {
    logger.error(`Error while connecting to DB: ${err}`);
  });

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/todos', todoRouter);
app.use('/api/boards', boardRouter);
app.use('/api/boardColumns', boardColumnRouter);
app.use('/api/cards', cardRouter);

export default app;
