const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/Routes');
const cors = require('cors');
const server = express();

try {
  mongoose.connect('mongodb+srv://Global:eHlJfs2G9SJvQwjC@cluster0-imsf4.mongodb.net/unitunes?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} catch (error) {
  console.log('Error connecting to database. Ex: ' + error);
}

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);