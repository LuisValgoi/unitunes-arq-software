const express = require('express');
const routes = express.Router();
const UserController = require('../controllers/UserController');

routes.get('/', UserController.getAll);
routes.get('/:id', UserController.getById);
routes.post('/', UserController.insert);
routes.put('/:id', UserController.update);
routes.delete('/:id', UserController.remove);
routes.post('/password/recovery', UserController.recoverPassword);
routes.post('/login', UserController.login);

module.exports = routes; 

/*
getAll              - retornarTodos
getById             - retornar
insert              - criar
update              - atualizar
remove              - deletar
authenticate        - autenticar
recoverPassword     - recuperarSenha
*/