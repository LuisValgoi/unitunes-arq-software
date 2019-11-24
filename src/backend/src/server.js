const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const routes = require('./routes/Routes');
const cors = require('cors');
const server = express();
const SessionUtil = require('./utils/Session');
require('./utils/String');

try {
  mongoose.connect('mongodb+srv://Global:eHlJfs2G9SJvQwjC@cluster0-imsf4.mongodb.net/unitunes?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} catch (error) {
  console.log('Error connecting to database. Ex: ' + error);
}

server.use(session({ secret: 'example', resave: false, saveUninitialized: true }));
server.use(SessionUtil.checkAuth);
server.use(cors());
server.use(express.json());
server.use(routes);

// catch 404 and forward to error handler
server.use(function (req, res, next) {
  next(createError(404));
});

server.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');

  // set sessions
  sess = req.session;
  sess.email;
  sess.username;
});

server.listen(3333);