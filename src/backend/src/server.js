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

// catch 404 and forward to error handler
server.use(function(req, res, next) {
  next(createError(404));
});

// error handler
server.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

server.listen(3333);