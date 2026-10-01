29/09/2026
aula-12-request-response-advenced 
Projeto em NestJS explorando recursos avançados de manipulação de requisições e respostas HTTP. 
Tecnologias Node.js NestJS TypeScript
 Instalação npm install
  Executando npm run start:dev A API roda em http://localhost:3000 .
   Conceitos abordados Decorators de request: @Body() , @Param() , @Query() , @Headers() , @Req() Decorators de response: @Res() , @HttpCode() , @Header() , @Redirect() Códigos de status HTTP personalizados (200, 201, 204, 400, 404) Tratamento de erros com exceções do Nest ( NotFoundException , BadRequestException ) Rotas dinâmicas e parâmetros de consulta
   
    Exemplos
     @Get(':id') 
    findOne(@Param('id')
     id: string,
     @Query('detalhes') detalhes?: string) {}  return this.service.findOne(id, detalhes);
      @Post()
       @HttpCode(201)
        create(@Body() dto: CreateDto) { 
             return this.service.create(dto); } 
             Testando
              Use o Insomnia para enviar requisições aos endpoints e conferir status, headers e corpo da resposta.

               Estrutura
                src/ ├── app.module.ts 
                ├── main.ts └── ...             # controllers e services da aula