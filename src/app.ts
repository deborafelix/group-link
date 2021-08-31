import express from 'express';
import { createConnection } from 'typeorm';
import './database';
import cors from 'cors';
import configRoutes from './routes';

const app = express();

async function bootstrap() {
  await createConnection();
  app.use(express.json());
  app.use(cors());
  await configRoutes(app);
}

bootstrap();

export default app;
