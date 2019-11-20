const express = require('express');
const UniversityRoutes = require('./UniversityRoutes');
const AcademicRoutes = require('./AcademicRoutes');
const AccountRoutes = require('./AccountRoutes');
const MovimentationRoutes = require('./MovimentationRoutes');

const routes = express.Router();

routes.use('/university', UniversityRoutes);
routes.use('/academic', AcademicRoutes);
routes.use('/account', AccountRoutes);
routes.use('/movimentation', MovimentationRoutes)

module.exports = routes; 