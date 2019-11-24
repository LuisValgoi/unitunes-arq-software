const Album = require('../models/Album');
const BaseService = require('./BaseService')(Album);

BaseService.getNewAlbuns = async function () {
  //TODO: implementar logica
};

BaseService.getRecentAlbuns = async function () {
  //TODO: implementar logica
};

module.exports = BaseService;

/*
> Álbuns novos são aqueles cadastrados nos últimos sessenta dias, tomando como referência a data que o
autor disponibilizou o mesmo para acesso e a data corrente. Por exemplo, se um autor cadastrar um álbum
em 01/03/2019 e um usuário acessa o uniTunes em 10/04/2019, o álbum será classificado como um álbum
novo (ver Figura 1). Se o acesso ocorre em 05/05/2019, o álbum será classificado como recente (ver Figura
1). O uniTunes poderá ser web, desktop ou um aplicativo para dispositivos móveis.
*/