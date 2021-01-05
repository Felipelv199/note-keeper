import express from 'express';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();

app.listen(process.env.PORT, () => console.log('Listening in port 8080'));
