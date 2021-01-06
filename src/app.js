import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

//routes
import notesRoutes from './routes/notes.routes';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();

app.use(morgan('dev'));

app.use('/notes', notesRoutes);

app.listen(process.env.PORT, () => console.log('Listening in port 8080'));
