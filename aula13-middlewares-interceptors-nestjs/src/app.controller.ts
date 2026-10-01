import { Controller, Get } from '@nestjs/common';


@Controller()
export class AppController {
@Get()
getPublic(){
  return{
    mensagem: 'Rota publica acessada com sucesso!',
    data: new Date()
  }
}
 @Get('admin')
 getPrivate(){
  return{
    mensagem:'Bem-vindo ao Painel Admin',
    data:new Date(),
  }
 }
}
