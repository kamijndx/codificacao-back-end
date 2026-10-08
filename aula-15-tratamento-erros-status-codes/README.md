07/10/2026


# Aula 15 - Tratamento de Erros e Status Codes (NestJS)

API de produtos com tratamento de erros usando exceptions do NestJS e logs com Logger.

## Objetivos

- Retornar status codes HTTP corretos
- Usar `BadRequestException` (400) e `NotFoundException` (404)
- Registrar avisos com o `Logger` do NestJS
- Separar responsabilidades: Controller (rotas) e Service (dados)

## Estrutura

    src/
    ├── app.module.ts
    ├── main.ts
    ├── produtos.controller.ts
    └── produtos.service.ts

## Service - produtos.service.ts

    import { Injectable } from '@nestjs/common';

    @Injectable()
    export class ProdutosService {
      private produtos = [
        { id: 1, nome: 'Arroz Namorados', preco: 9.99 },
        { id: 2, nome: 'Feijao Timbiras', preco: 7.99 },
        { id: 3, nome: 'Macarrao Galo', preco: 5.99 },
        { id: 4, nome: 'Açucar União', preco: 4.99 },
        { id: 5, nome: 'Sal lebre', preco: 2.99 },
      ];

      listarProdutos() {
        return this.produtos;
      }
    }

## Controller - produtos.controller.ts

    import {
      Controller,
      Get,
      Param,
      BadRequestException,
      NotFoundException,
      Logger,
    } from '@nestjs/common';
    import { ProdutosService } from './produtos.service.js';

    @Controller('produtos')
    export class ProdutosController {
      private readonly logger = new Logger(ProdutosController.name);
      constructor(private readonly produtosService: ProdutosService) {}

      @Get()
      produtos() {
        return this.produtosService.listarProdutos();
      }

      @Get(':id')
      buscarProdutos(@Param('id') idProduto: string) {
        const id = Number(idProduto);

        if (isNaN(id)) {
          this.logger.warn(`Tentativa de buscar com ID ${idProduto} não numerico.`);
          throw new BadRequestException('O ID do produto deve ser um numero inteiro.');
        }

        const produto = this.produtos().find((produto) => produto.id === id);

        if (!produto) {
          this.logger.warn(`Produto com ID ${id} nao localizado.`);
          throw new NotFoundException(`Produto com ID ${id} não encontrado`);
        }

        return produto;
      }
    }

## Rotas

| Método | Rota | Resultado |
|---|---|---|
| GET | /produtos | 200 - lista de produtos |
| GET | /produtos/1 | 200 - produto encontrado |
| GET | /produtos/abc | 400 - ID não numérico |
| GET | /produtos/99 | 404 - produto não encontrado |

## Status codes da aula

- **200 OK**: sucesso
- **400 Bad Request**: dado enviado inválido
- **404 Not Found**: recurso não existe

## Como rodar
    npm run start:dev

Testar no : `http://localhost:3000/produtos`
