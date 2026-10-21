
import { ApiProperty } from "@nestjs/swagger";

export class CriarProdutoDto {
  @ApiProperty({ example: "café grão de ouro 500g", description: "nome comercial do produto cadastrado." })
  nome: string;

  @ApiProperty({ example: 9.99, description: "preço unitário do produto" })
  preco: number;

  @ApiProperty({ example: "alimentos", description: "categoria do produto" })
  categoria: string;
}