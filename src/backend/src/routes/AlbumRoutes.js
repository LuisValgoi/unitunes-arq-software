const express = require('express');
const routes = express.Router();
const AlbumController = require('../controllers/AlbumController');

routes.get('/', AlbumController.getAll);
routes.get('/news', AlbumController.getAllNews);
routes.get('/recents', AlbumController.getAllRecents);
routes.get('/:id', AlbumController.getById);
routes.post('/', AlbumController.insert);
routes.put('/:id', AlbumController.update);
routes.delete('/:id', AlbumController.remove);

module.exports = routes;

/*
getAll          - Retornar todos albuns
getById         - Retornar album
UI              - Executar album
insert          - Criar album 
delete          - Deletar album
update          - Atualizar albums
getNewAlbuns    - Retornar albuns novos
getRecentAlbuns - Retornar albuns recentes
*/
