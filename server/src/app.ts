import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import todoRouter from './routes/todos';
import projectRouter from './routes/projects';
import boardRouter from './routes/boards';
import boardColumnRouter from './routes/boardColumns';
import cardRouter from './routes/cards';

const app: Application = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/todos', todoRouter);
app.use('/api/projects', projectRouter);
app.use('/api/boards', boardRouter);
app.use('/api/boardColumns', boardColumnRouter);
app.use('/api/cards', cardRouter);

export default app;
