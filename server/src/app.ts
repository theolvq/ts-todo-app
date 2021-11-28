import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import todoRouter from './routes/todo';
import projectRouter from './routes/project';

const app: Application = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/todos', todoRouter);
app.use('/api/projects', projectRouter);

export default app;
