import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

import router from './routes/routes';

import { createConnection } from 'typeorm';

const app = express();

//Connection database

createConnection();
console.log("Database conected");
// Middlewares

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Consume the routes
app.use('/api/auth', router);

app.listen(3333);
console.log('Serve on in port', 3333);
