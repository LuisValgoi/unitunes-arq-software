const express = require('express');
const routes = express.Router();
const auth = require('../middleware/auth');
const MediaController = require('../controllers/MediaController');

routes.get('/', auth, MediaController.getAll);
routes.get('/released', auth, MediaController.getAllReleased);
routes.get('/:id', auth, MediaController.getById);
routes.post('/', auth, MediaController.insert);
routes.put('/:id', auth, MediaController.update);
routes.delete('/:id', auth, MediaController.remove);
routes.get('/:id/content', auth, MediaController.getContent);
routes.put('/:id/release', auth, MediaController.release);
routes.get('/:id/download', auth, MediaController.download);
routes.post('/:id/buy', auth, MediaController.buy);
routes.post('/:id/inappropriate', auth, MediaController.setMidiaInappropriate);

module.exports = routes;

/*
getAll                - retornarTodas
getAllAvailables      - retornarTodasDisponibilizadas
getById               - retornar
insert                - criar
update                - atualizar
remove                - remover
getContent            - executarConteudo
release               - disponibilizar
download              - baixar
buy                   - comprar
*/