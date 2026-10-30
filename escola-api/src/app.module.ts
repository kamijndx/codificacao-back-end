import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlunoModule } from './alunos/alunos.module.js';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/escola_dbn'),
    AlunoModule,
  ],
})
export class AppModule {}