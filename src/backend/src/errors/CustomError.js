const BadRequestError = require('./BadRequestError');
const NotFoundError = require('./NotFoundError');
const PersistenceError = require('./PersistenceError');
const UnauthorizedError = require('./UnauthorizedError');

module.exports = {
  BadRequest: BadRequestError, 
  NotFound: NotFoundError,
  Persistence: PersistenceError,
  Unauthorized: UnauthorizedError
}