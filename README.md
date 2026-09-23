# Codificação para Back-End

![NodeJS](https://img.shields.io/badge/Node.js-v18%2B-green?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-4.x-black?style=for-the-badge&logo=express)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?style=for-the-badge&logo=javascript)


Repositório dedicado ao armazenamento de códigos, rotinas práticas, desafios e projetos desenvolvidos na Unidade Curricular de **Codificação para Back-End** do **SENAI - AMAPÁ**. 

O objetivo principal deste repositório é consolidar os conhecimentos essenciais sobre o runtime **Node.js**, arquitetura de servidor, manipulação de arquivos, segurança, tratamento de exceções e construção de APIs RESTful.



## Conteúdos e Módulos de Estudo

-  **Aula 01: Revisão do Node.JS e NPM**
  - Arquitetura do Node.js, Motor V8 e Event Loop (Call Stack, Microtasks, Macrotasks).
  - Gerenciamento de pacotes com NPM e estrutura do `package.json`.

## Tecnologias e Ferramentas

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework Web:** [Express.js](https://expressjs.com/)
- **Gerenciador de Dependências:** [NPM](https://www.npmjs.com/)
- **Controle de Versão:** [Git](https://git-scm.com/) e [GitHub](https://github.com/)

-  *Aula 02: Módulos CommonJS e ESM*
  - Diferenças entre require/module.exports (CommonJS) e import/export (ESM).

-  *Aula 03: Streams e Buffers*
  - Geração de arquivos grandes com fs.createWriteStream.
  - Leitura linha a linha com fs.createReadStream + readline, filtragem de logs de erro.
  - Medição de consumo de memória (RSS/heap) com process.memoryUsage().

-  *Aula 04: Tratamento Global de Exceções*
  - Middleware de tratamento de erros em server.js.

-  *Aula 05: Variáveis de Ambiente e Configurações de Segurança*
  - Uso de .env para configurações sensíveis e boas práticas de segurança.

-  *Aula 06: Networking e Primeiro Servidor HTTP*
  - Atividade prática "Servidor Sentinela" — servidor HTTP criado com Node.js puro (sem framework).

-  *Aula 07: Projeto NestJS*
  - Criação do projeto NestJS (app.controller.ts, app.service.ts, app.module.ts).
  - Rota GET /status mapeada e testada.

-  *Aula 08-09: Métodos GET, POST, PATCH e DELETE*
  - Implementação de CRUD completo de convidados (convidado.controller.ts, convidados.service.ts).
  - Rotas: GET /convidado, POST /convidado, PATCH /convidado/:id, DELETE /convidado/:id.