Aula 13 - Middlewares e Interceptors (NestJS)

 Projeto da aula 13 do curso de Back-End com NestJS. O foco é criar e registrar um middleware que registra logs das requisições e protege rotas administrativas. Tecnologias
  Node.js
   TypeScript
    NestJS Estrutura 

 src/ ├── app.controller.ts
  ├── app.module.ts 
  ├── app.service.ts
   ├── main.ts 
   └── logger/
    └── logger.middleware.ts
     O que foi implementado
      LoggerMiddleware Middleware que roda antes dos controllers e faz duas coisas:
      1. Log: exibe no console o método HTTP e a rota de cada requisição.
       2. Proteção de rotas /admin : verifica o header x-user-base . 
       Se o valor não for Administrator , responde com status 403 e uma mensagem de acesso negado.

       Registro no AppModule O módulo implementa NestModule e aplica o middleware em todas as rotas: export class AppModule implements NestModule
        {  configure(consumer: MiddlewareConsumer) { 
             consumer.apply(LoggerMiddleware).forRoutes('*');
             } 
         } 
         Como executar npm install npm run start:dev O servidor sobe em http://localhost:3000 .
         Exemplo de resposta
          (403) { }  "Codigo": 403,  "mensagem": "Acesso Negado: Privilégio de Administrador necessário",  "registro": "2026-09-30T21:02:00.000Z"
           Conceitos estudados
            Decorator @Injectable() Interface 
            NestMiddleware e método use(req, res, next) 
            MiddlewareConsumer 
             método configure forRoutes() para definir onde o middleware atua Controle de acesso simples via headers 
             Uso do next() para continuar o fluxo da requisição