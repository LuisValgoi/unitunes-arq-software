const express = require('express');
const UniversityRoutes = require('./UniversityRoutes');
const AcademicRoutes = require('./AcademicRoutes');

const routes = express.Router();

routes.use('/university', UniversityRoutes);
routes.use('/academic', AcademicRoutes);

module.exports = routes; 