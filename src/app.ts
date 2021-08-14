import express from 'express';
import { createConnection } from 'typeorm';
import routes from './routes';

const app = express();

async function bootstrap() {
  await createConnection();

  app.use(express.json());
  app.use('/grouplink', routes);
}

bootstrap();

export default app;
