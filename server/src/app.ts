import express, { Application } from 'express';
import morgan from 'morgan';
import todoRouter from './api/routes/todo';
import projectRouter from './api/routes/project';

const app: Application = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/todos', todoRouter);
app.use('/api/projects', projectRouter);

export default app;
