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

- # Aula 08-09 - Métodos GET, POST, PATCH e DELETE

## 5. Tratamento de Erros

- Utilização de NotFoundException para recurso não encontrado
- Mensagens claras no console com prefixos [Operador] e [Administrador]
- Respostas padronizadas com mensagem e dados

## 6. Arquivos Criados

- app.module.ts → Módulo raiz da aplicação
- app.service.ts → Serviço inicial de verificação
- convidados.controller.ts → Rotas e métodos HTTP
- convidados.service.ts → Lógica de manipulação dos dados
- criar-convidado.dto.ts → Modelo de dados para cadastro

## Conceitos Aprendidos

- Diferença entre GET, POST, PATCH e DELETE
- Separação de responsabilidades: Controller vs Service
- Uso de DTO para tipagem e organização
- Parâmetros de rota (:id) e corpo da requisição (@Body())
- Manipulação de arrays em memória
- Códigos de status HTTP
- Tratamento de exceções no NestJS