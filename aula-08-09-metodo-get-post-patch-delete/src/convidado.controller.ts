import {Controller, Get, Post, Body} from "@nestjs/common"
import { CriarConvidado } from "./criar-convidado.dto.js"

@Controller ('convidado')
export class ConvidadosController {

    @Get()
    listarConvidados(){
        return[
        'Rebeca',
        'Liam',
        'Caue',
        'Emanuelly',
        'Jamilly',
        'Vitória'
        ];
    }

    @Post()
    criarConvidado(@Body() criarConvidado: CriarConvidado){
        console.log (`OPERADORA NAYRA]Novo convidado(a) Registrado(a): ${criarConvidado.nome}`);

        return{
            mensagem: `Convidado ${criarConvidado.nome} convidado com sucesso`,
            dados: criarConvidado,
        }
    }
}