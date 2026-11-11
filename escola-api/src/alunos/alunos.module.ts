import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AlunosController } from "./alunos.controller.js";
import { AlunosService } from "./alunos.service.js";
import { Aluno,Alunoschema } from "./schemas/alunos.schema.js";

@Module({
    imports:[
        MongooseModule.forFeature([{
            name: Aluno.name, schema: Alunoschema
        }])
    ],
    controllers:[AlunosController],
    providers: [AlunosService],
})
export class AlunosModule {}