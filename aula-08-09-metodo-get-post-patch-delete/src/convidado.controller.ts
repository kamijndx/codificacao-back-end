import {Controller, Get, Post, Body, Patch, Delete, Param, HttpCode} from "@nestjs/common"
import { CriarConvidado } from "./criar-convidado.dto.js"
import { ConvidadosService } from "./convidados.service.js";

@Controller ('convidado')
export class ConvidadosController {
        constructor(private readonly convidadosService : ConvidadosService){}


    @Get()
    listarConvidados(){
    return this.convidadosService.listarconvidados();
}
       
    

    @Post()
    criarConvidado(@Body() criarConvidado: CriarConvidado){
        console.log (`OPERADORA NAYRA]Novo convidado(a) Registrado(a): ${criarConvidado.nome}`);

        return{
            mensagem: `Convidado ${criarConvidado.nome} convidado com sucesso`,
            dados: criarConvidado,
        }
    }
    @Patch(':id')
    atualizarIdade(@Param ('id') id: string, @Body('idade')idade: number){
        console.log (`[ADMINISTRADOR] Atualizando idade do ID ${id}`);
    }
     
        @Delete(':id')
@HttpCode(204)

removerConvidads(@Param('id') id:string){

    console.log(`[ADMINISTRADOR] Convidado com ID ${id} removido com Sucesso!`);
    this.convidadosService.removerConvidadoLista(+id);
}
    }

