import express, { Application } from 'express';
import morgan from 'morgan';

const app: Application = express();

app.use(morgan('dev'));
app.use(express.json());

export default app;
