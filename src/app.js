import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

import './db';
import notesRoutes from './routes/notes.routes';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/notes', notesRoutes);

app.listen(process.env.PORT, () => console.log('Listening in port 8080'));
