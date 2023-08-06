const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const api = require('./api');
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  mongoose.connection.on("open", function () {
    console.log("Mongoose Connected Successfully!");
  });
  mongoose.connection.on("error", function(err) {
      console.log("Could not connect to mongo server!");
      return console.log(err.message);
    });
    app.use(express.json())

  app.use('/api/', api);

app.get('/api/contacts', (req, res)=> {
    res.status(200).json({message: 'Get all contact'})
})
app.listen(2000, ()=> {
    console.log(port)
});
