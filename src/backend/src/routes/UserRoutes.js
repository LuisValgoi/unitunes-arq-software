const express = require('express');
const routes = express.Router();
const auth = require('../middleware/auth');
const UserController = require('../controllers/UserController');

routes.get('/me', auth, UserController.me);
routes.post('/me/logout', auth, UserController.logout);
routes.post('/me/logoutAll', auth, UserController.logoutAll);
routes.post('/me/password/recover', UserController.recoverPassword);
routes.get('/', UserController.getAll);
routes.get('/:id', UserController.getById);
routes.post('/', UserController.insert);
routes.put('/:id', UserController.update);
routes.delete('/:id', UserController.remove);
routes.post('/login', UserController.login);

module.exports = routes; 

/*
getMe               - retorarEu
getAll              - retornarTodos
getById             - retornar
insert              - criar
update              - atualizar
remove              - deletar
recoverPassword     - recuperarSenha
login               - autenticar
logout              - logout
logoutAll           - logoutTodosAparelhos
*/