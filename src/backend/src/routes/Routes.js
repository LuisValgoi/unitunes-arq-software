const express = require('express');
const UniversityRoutes = require('./UniversityRoutes');
const AcademicRoutes = require('./AcademicRoutes');
const AccountRoutes = require('./AccountRoutes');
const MovimentationRoutes = require('./MovimentationRoutes');
const MediaRoutes = require('./MediaRoutes');
const RootRoutes = require('./RootRoutes');

const routes = express.Router();

routes.use('/university', UniversityRoutes);
routes.use('/academic', AcademicRoutes);
routes.use('/account', AccountRoutes);
routes.use('/movimentation', MovimentationRoutes);
routes.use('/media', MediaRoutes);
routes.use('/', RootRoutes.listAll);

module.exports = routes; 