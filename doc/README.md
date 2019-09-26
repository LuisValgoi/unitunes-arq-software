# Informações de Entrega

## Visão Geral
- T1 - (12/09) = Apresentação sobre ReactJS
- T2 - (03/10) = Projeto da Aplicação LooneyTunes
- T3 - (07/11) = Apresentação sobre NodeJS
- T4 - (21/11) = Implementação e Comparação do Projeto no T2

## O que fazer no T1?
- Deve ser feita uma apresentação sobre a tecnologia ReactJS
- Deve ser composto por uma estrutura padrão de SLIDES.

## O que fazer no T2?
Deve ser entregue os seguintes artefatos:

- Diagrama de casos de uso Cenário
- Especificação completa dos UC (min. 7 espec.)
- Diagrama de classes 
- Diagrama de sequência (mínimo 5 diagramas)
- Diagrama de componentes
- Descrição da arquitetura do sistema

## O que fazer no T3?
- Deve ser feita uma apresentação sobre a tecnologia NodeJS
- Deve ser composto por uma estrutura padrão de SLIDES.

## O que fazer no T4?
Deve ser entregue os seguintes artefatos:
- Código da Aplicação
- Análise Comparativa do T2 e T4

---

# Informações dos Requisitos

## Objetivo do uniTunes
Permitir que a comunidade acadêmica universitária possa gerenciar mídias utilizando o sistema. 

## Quais são os Stakeholders
- acadêmico
- administrador

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

Se o administrador do sistema identificar alguma mídia inapropriada, ele poderá `removê-la`.

Caso acontece, o criador da mídia deve ser `notificado` do motivo da remoção dela. 

O administrador poderá também `excluir` a conta de acadêmicos, porém o inverso não é possível.

## Outros
A mídia disponibilizada na aplicação uniTunes poderá ser de `livre` acesso ou `paga`. 

Cada mídia disponibilizada terá um valor `igual` ou `maior` que `R$ 0,01`. 

A uniTunes terá às seguintes mídias:
- música (Figura 1)
- livro (Figura 2)
- vídeos (Figura 3)
- podcasts (Figura 4)

Toda mídia é caracterizada por:
- nome
- descrição
- imagem
- preço
- nome do(s) criador(es),
- conteúdo (sendo a própria mídia)
- data de criação
- categoria

As categorias das mídias são encontradas em [`~/docs/categorias.md`](https://github.com/LuisValgoi/unitunes-arq-software/blob/master/doc/categories.md).

As mídias do tipo `música`, `vídeo` e `podcasts` serão caracterizadas pela duração contabilizada em minutos.

As mídias do tipo `livro`, por sua vez, será também caracterizado pelo seu número de páginas.

Os stakeholders usarão estas categorias para `classificar` as mídias e `executar buscas` mais refinadas e customizadas.

O sistema deverá ter uma `interface específica` para cada tipo de mídia.

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

Todo stakeholder poderá `adicionar créditos (R$)` a sua conta com o objetivo de `comprar` alguma `mídia`, podendo ser:
- via cartão de crédito
- transferência
- boleto bancário.

Comprar uma mídia significa:
- transferir 90% do valor da mídia da conta do stakeholder (o comprador) para a conta do criador da mídia (o vendedor)
- transferir 10% do valor da mídia para a conta do administrador do sistema (o qual é o representante legal da empresa proprietária do uniTunes)