import express from 'express';
import { createConnection } from 'typeorm';
import './database';
import configRoutes from './routes';

const app = express();

async function bootstrap() {
  await createConnection();
  app.use(express.json());
  await configRoutes(app);
}

bootstrap();

export default app;
