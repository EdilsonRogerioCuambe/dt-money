# Aplicativo de Controle de Finanças

![Aplicativo de Controle de Finanças](/home.png)

Este repositório contém um aplicativo de controle de finanças construído usando ReactJS. O aplicativo permite que os usuários registrem transações financeiras, como receitas e despesas, fornecendo uma visão geral de suas atividades financeiras. O aplicativo é projetado para ajudar os usuários a gerenciar suas finanças de forma eficaz, mantendo o controle de suas transações e categorias.

## Sumário
- [Instalação](#instalação)
- [Recursos](#recursos)
- [Dependências](#dependências)
- [Contexto e Gerenciamento de Transações](#contexto-e-gerenciamento-de-transações)
- [Páginas e Componentes](#páginas-e-componentes)

## Instalação

1. Clone este repositório para a sua máquina local.
2. Navegue até o diretório do projeto em seu terminal.
3. Execute `npm install` para instalar as dependências necessárias.
4. Execute `npm start` para iniciar o servidor de desenvolvimento.
5. Abra seu navegador da web e acesse `http://localhost:3000`.

## Recursos

- Registre transações financeiras, especificando descrição, preço, categoria e tipo (receita ou despesa).
- Veja uma visão geral de suas transações, organizadas por data de criação.
- Mantenha o controle de suas finanças, com opções para adicionar receitas e despesas.
- Utilize um tema visual agradável com a biblioteca `styled-components`.

## Dependências

O aplicativo depende das seguintes bibliotecas e pacotes:

- `axios`: Para fazer requisições HTTP à API de transações.
- `phosphor-react`: Para ícones visuais.
- `react` e `react-dom`: Para criar a interface do usuário do aplicativo.
- `react-hook-form`: Para criar formulários controlados.
- `styled-components`: Para estilização com componentes.
- `use-context-selector`: Para gerenciamento de contexto avançado.
- `zod`: Para validação de esquemas de dados.

## Contexto e Gerenciamento de Transações

O aplicativo utiliza o contexto `TransactionsContext` e o componente `TransactionsProvider` para gerenciar o estado das transações. Esse contexto fornece métodos para obter as transações existentes e criar novas transações. As transações são organizadas por data de criação, permitindo que os usuários mantenham um registro claro de suas atividades financeiras.

## Páginas e Componentes

O aplicativo é composto por várias páginas e componentes, incluindo a página principal de transações. A página de transações exibe a lista de transações registradas, permitindo aos usuários visualizar suas receitas e despesas. O aplicativo utiliza estilos definidos na biblioteca `styled-components` para uma experiência visual agradável.