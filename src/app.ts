import express from 'express';
import routes from './routes';

const app = express();

const mongoose = require('mongoose');

app.use(express.json());
app.use('/grouplink', routes);

mongoose
  .connect('mongodb://admin:password@localhost:27017/grouplink?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('>>>> MongoDB UP');
  })
  .catch((error: Error) => {
    console.log(error);
  });

export default app;
