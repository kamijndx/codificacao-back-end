import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type alunoDoc = HydratedDocument<Aluno>;

@Schema()
export class Aluno {
  @Prop({ required: true
   })
  nome: string;

  @Prop({ required: true
   })
  idade: number;

  @Prop({ 
    required: true,
    unique:true
  })
  matricula: string;

  @Prop({ type: [String] })
  cursos: string[];
}

export const Alunoschema = SchemaFactory.createForClass(Aluno);