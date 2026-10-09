08/10/2026

# Aula 16 — Validação de Schemas com Zod no NestJS

Validação dos dados de entrada (`body`) de uma API NestJS usando **Zod** e um **Pipe** personalizado.

## Objetivo

- Definir schemas de validação com Zod
- Criar um pipe reutilizável (`ZodValidationPipe`)
- Retornar erros de validação padronizados (`400 Bad Request`)

## Tecnologias

- NestJS
- TypeScript
- Zod

## Instalação

```bash
npm install
npm install zod
```

## Como funciona

O `ZodValidationPipe` recebe um schema Zod no construtor e valida apenas o `body` da requisição:

1. Se o dado não for do tipo `body`, retorna o valor sem validar.
2. Executa `schema.safeParse(value)`.
3. Se a validação falhar, formata os erros (`campo` e `mensagem`) e lança `BadRequestException`.
4. Se passar, retorna os dados validados (`parseResult.data`).

### Pipe

```ts
import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { z } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: z.ZodType) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    if (metadata.type !== 'body') return value;

    const parseResult = this.schema.safeParse(value);

    if (!parseResult.success) {
      const formatedErrors = parseResult.error.issues.map((issue) => ({
        campo: issue.path.join('.'),
        mensagem: issue.message,
      }));
      throw new BadRequestException({
        statusCode: 400,
        erros: formatedErrors,
      });
    }

    return parseResult.data;
  }
}
```

### Uso no controller

```ts
@Post()
@UsePipes(new ZodValidationPipe(colaboradorSchema))
create(@Body() body: CreateColaboradorDto) {
  return this.service.create(body);
}
```

## Exemplo de resposta de erro

```json
{
  "statusCode": 400,
  "erros": [
    { "campo": "nome", "mensagem": "Required" }
  ]
  
}
```

