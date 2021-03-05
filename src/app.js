const express = require('express')
const routes = require('./routes/routes')
const app = express()

const mongoose = require('mongoose')

app.use(express.json());
app.use('/grouplink', routes);

mongoose
  .connect('mongodb://admin:password@localhost:27017/grouplink?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(result => {
    console.log('>>>> MongoDB UP');
  })
  .catch(error => {
    console.log(error);
  });




module.exports = app;