## Objetivo do uniTunes
Permitir que a comunidade acadêmica universitária (`academicos` e `administradores`) possa gerenciar mídias utilizando o sistema. 

## Stakeholder "Academico" 
Todos os stakeholders que tem um vínculo com uma universidade (tais como alunos, professores, técnicos administrativos e dentre outros). 

Ele poderá criar mídias e disponibilizá-las na aplicação. 

Ao criar uma mídia, o acadêmico passará a ter um total controle sobre a mídia criada, podendo visualizá-la, removê-la e atualizá-la. 

## Stakeholder "Administrador"
É um acadêmico responsável por fiscalizar as atividades realizadas pelos usuários do sistema

Tem o objetivo de evitar comportamentos inadequados como, por exemplo:
  - mídia que viole a privacidade
  - mídia que viole as regras da universidade
  - mídia que viole os princípios éticos. 

`Se` o administrador do sistema `identificar alguma mídia inapropriada`, ele poderá `removê-la`.
  - Caso acontece, `o criador da mídia deve ser notificado` com o motivo da remoção dela. 

O administrador poderá também `excluir a conta de acadêmicos`, porém o inverso não é possível.

## Mídia Info
A `mídia` disponibilizada na aplicação uniTunes `poderá ser de livre acesso ou paga`. 

Cada mídia disponibilizada terá um valor `igual ou maior` que `R$ 0,01`. 

A uniTunes terá às seguintes mídias: `música`, `livro`, `vídeos`, `podcasts`.

As mídias do tipo `música`, `vídeo` e `podcasts` serão `caracterizadas pela duração contabilizada em minutos`.

As mídias do tipo `livro`, por sua vez, será também `caracterizado pelo seu número de páginas`.

Toda mídia é caracterizada por:
- nome
- descrição
- imagem
- preço
- nome do(s) criador(es),
- conteúdo (sendo a própria mídia)
- data de criação
- categoria

As categorias das mídias são encontradas em [`~/docs/categorias.md`](https://github.com/LuisValgoi/unitunes-arq-software/blob/master/doc/categorias.md).

O sistema deverá ter uma `interface específica para cada tipo de mídia`.

## Funcionalidades
Os stakeholders usarão as categorias para `classificar as mídias` e `executar buscas mais refinadas` e customizadas.

Os stakeholders do uniTunes poderão:
- executar uma mídia (exceto para livro)
- visualizar
- comprar
- vender
- fazer download
- organizar em lista de favoritos

Os stakeholders poderão:
- criar uma lista de favoritos para cada tipo de mídia
- visualizar uma lista de favoritos e uma midia desta lista
- atualizar uma lista de favoritos e uma midia desta lista
- remover uma lista de favoritos e uma midia desta lista

Todo stakeholder poderá `adicionar créditos (R$)` a sua conta com o objetivo de `comprar alguma mídia`, podendo ser:
- via cartão de crédito
- transferência
- boleto bancário.

`Comprar uma mídia` significa:
- transferir 90% do valor da mídia da conta do stakeholder (o comprador) para a conta do criador da mídia (o vendedor)
- transferir 10% do valor da mídia para a conta do administrador do sistema (o qual é o representante legal da empresa proprietária do uniTunes)

Um `comprovante de pagamento será emitido`, contendo:
- a descrição do que foi comprado
- o valor total vendido
- a data
- o nome do comprador
- o nome do vendedor

O `administrador` do sistema poderá `acompanhar as vendas realizadas` no uniTunes através de um `dashboard`.
- Ele poderá `consultar o nome das mídias vendidas` e o `total vendido` por: `dia`, `bimestre`, `ano`, `intervalo de data`.

As `mídias compradas` por um stakeholder serão `disponibilizadas na lista de mídias adquiridas` pelo mesmo.

O stakeholder poderá `visualizar, a qualquer momento, os seus créditos`.

O administrador poderá `verificar a quantidade` e o `valor total` de mídias vendidas `até a data corrente`.

Os stakeholders poderão `fazer downloads das mídias compradas` e das mídias `de acesso livre`.

Os `criadores de mídia` (Academicos) `poderão criar álbuns`(que vão ter ao menos uma música) para melhor organizar as suas músicas.

Os acadêmicos poderão visualizar:
- os álbuns novos
- os álbuns mais recentes
- todos os álbuns cadastrados no sistema

> Álbuns novos são aqueles cadastrados nos últimos sessenta dias, tomando como referência a data que o
autor disponibilizou o mesmo para acesso e a data corrente. Por exemplo, se um autor cadastrar um álbum
em 01/03/2019 e um usuário acessa o uniTunes em 10/04/2019, o álbum será classificado como um álbum
novo (ver Figura 1). Se o acesso ocorre em 05/05/2019, o álbum será classificado como recente (ver Figura
1). O uniTunes poderá ser web, desktop ou um aplicativo para dispositivos móveis.

## Autenticação

`Apenas stakeholders autenticados` poderão ter acesso ao uniTunes.

Sendo assim, a uniTunes deverá apresentar as seguintes funcionalidades:
- criar conta de usuário
    - primeiro nome
    - último nome
    - e-mail (será o login)
    - senha
    - confirmação de senha

- recuperar senha cadastrada
  - a qual será enviada ao e-mail do usuário

- autenticar (fazer login/logout) no sistema
  - Acadêmicos não poderão ter acesso às funcionalidades inerentes aos Administradores
  - O sistema deve ser capaz de checar se o e-mail de cadastro é válido
  - O sistema deve garantir que a senha tem no mínimo 6 e no máximo 30 caracteres alfanuméricos
  - O sistema deve garantir que os campos da senha e da confirmação de senha sejam
iguais
  - O sistema deve garantir que o primeiro e último nome não são nulos
