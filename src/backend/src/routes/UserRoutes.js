const express = require('express');
const routes = express.Router();
const UserController = require('../controllers/UserController');

routes.get('/', UserController.getAll);
routes.get('/:id', UserController.getById);
routes.post('/', UserController.insert);
routes.put('/:id', UserController.update);
routes.delete('/:id', UserController.remove);
routes.post('/:id/auth', UserController.authenticate);
routes.post('/:id/password/recovery', UserController.recoverPassword);

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