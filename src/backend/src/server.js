const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const server = express();

mongoose.connect("mongodb+srv://Global:eHlJfs2G9SJvQwjC@cluster0-imsf4.mongodb.net/unitunes?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);