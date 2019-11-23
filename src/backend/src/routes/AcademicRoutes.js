const express = require('express');
const routes = express.Router();
const AcademicController = require('../controllers/AcademicController');

routes.get('/', AcademicController.getAll);
routes.get('/:id', AcademicController.getById);
routes.post('/', AcademicController.insert);
routes.put('/:id', AcademicController.update);
routes.delete('/:id', AcademicController.remove);
routes.post('/:id/auth', AcademicController.authenticate);
routes.post('/:id/password/recovery', AcademicController.recoverPassword);

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