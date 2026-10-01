28/09/2026
Aula 11 - API de Upload de Imagem API desenvolvida com NestJS que permite o envio de imagens usando Multer.
 Tecnologias Node.js NestJS TypeScript Multer
  Instalação npm install 
  Executando
   # desenvolvimento npm run start:dev # produção npm run start:prod A API roda em http://localhost:3000 
   . Estrutura
    src/ ├── media/          # módulo de upload (controller, service)
     ├── app.module.ts   # módulo principal
      └── main.ts uploads/            # imagens enviadas (não versionar)
      