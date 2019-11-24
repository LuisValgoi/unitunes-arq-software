const express = require('express');
const routes = express.Router();
const MovimentationController = require('../controllers/MovimentationController');

routes.get('/account/:id', MovimentationController.getAllByAccount);
routes.get('/:id', MovimentationController.getById);
routes.post('/', MovimentationController.insert);
routes.put('/:id', MovimentationController.update);
routes.delete('/:id', MovimentationController.remove);
routes.get('/:id/receipt', MovimentationController.generateReceipt);
routes.post('/seller/:id', MovimentationController.getAllBySeller);

module.exports = routes; 

/*
getAllByAccount     - retornarTodos
getById             - retornar
insert              - criar
update              - atualizar
remove              - excluir
generateReceipt     - emitirComprovante
getAllBySeller      - retornaMovitaçãoDoUsuario
*/