const express = require('express');
const UniversityRoutes = require('./UniversityRoutes');
const AcademicRoutes = require('./AcademicRoutes');
const AccountRoutes = require('./AccountRoutes');

const routes = express.Router();

routes.use('/university', UniversityRoutes);
routes.use('/academic', AcademicRoutes);
routes.use('/account', AccountRoutes);

module.exports = routes; 