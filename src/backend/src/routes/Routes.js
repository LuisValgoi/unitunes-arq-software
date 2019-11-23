const express = require('express');
const UniversityRoutes = require('./UniversityRoutes');
const AcademicRoutes = require('./AcademicRoutes');
const AccountRoutes = require('./AccountRoutes');
const MovimentationRoutes = require('./MovimentationRoutes');
const MediaRoutes = require('./MediaRoutes');
const FavoriteRoutes = require('./FavoriteRoutes');
const LibraryRoutes = require('./LibraryRoutes');
const RootRoutes = require('./RootRoutes');


const routes = express.Router();

routes.use('/university', UniversityRoutes);
routes.use('/academic', AcademicRoutes);
routes.use('/account', AccountRoutes);
routes.use('/movimentation', MovimentationRoutes);
routes.use('/media', MediaRoutes);
routes.use('/favorite', FavoriteRoutes);
routes.use('/library', LibraryRoutes);
routes.use('/', RootRoutes.listAll);

module.exports = routes; 