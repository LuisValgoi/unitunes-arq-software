const express = require('express');
const UniversityRoutes = require('./UniversityRoutes');
const UserRoutes = require('./UserRoutes');
const AccountRoutes = require('./AccountRoutes');
const MovimentationRoutes = require('./MovimentationRoutes');
const MediaRoutes = require('./MediaRoutes');
const FavoriteRoutes = require('./FavoriteRoutes');
const LibraryRoutes = require('./LibraryRoutes');
const AppRoutes = require('./AppRoutes');

const routes = express.Router();

routes.use('/university', UniversityRoutes);
routes.use('/user', UserRoutes);
routes.use('/account', AccountRoutes);
routes.use('/movimentation', MovimentationRoutes);
routes.use('/media', MediaRoutes);
routes.use('/favorite', FavoriteRoutes);
routes.use('/library', LibraryRoutes);
routes.use('/', AppRoutes);

module.exports = routes; 