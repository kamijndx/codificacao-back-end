# Aula 03 - Streams e Buffers

## Objetivo
Entender como o Node.js lida com grandes volumes de dados sem estourar a memória, usando *Streams* (leitura/escrita em pedaços) em vez de carregar arquivos inteiros na RAM.

## Arquivos

### gerarLogGigante.js
Gera um arquivo servidor.log simulado com *400.000 linhas* de log, usando fs.createWriteStream.
- A cada 7 linhas, o status é ERROR; as demais são INFO.
- Como usa uma write stream, o arquivo é escrito em pedaços (chunks), sem acumular tudo em memória antes de salvar.

### processarLogs.js
Lê o servidor.log linha por linha (com fs.createReadStream + readline) e filtra apenas as linhas que contêm ERROR, salvando o resultado em apenas_erros.log.
- Mostra o consumo de memória (RSS/Heap, via process.memoryUsage()) no início e no fim do processamento, para provar que ler com stream não sobrecarrega a memória mesmo com um arquivo grande.
- Ao final, exibe no console o total de linhas de erro encontradas.

### apenas_erros.log
Arquivo de saída gerado por processarLogs.js, contendo só as linhas de erro.

### servidor.log
Log "bruto" gerado por gerarLogGigante.js, usado como entrada para o processamento.

## Conceitos praticados
- *Buffers*: dados binários manipulados em pedaços (chunks) por baixo dos panos das streams.
- *Streams de escrita* (createWriteStream): grava dados aos poucos, sem travar a aplicação.
- *Streams de leitura* (createReadStream + readline): lê arquivos grandes linha a linha, sem carregar tudo de uma vez.
- *Eficiência de memória*: comparação do uso de RSS/Heap antes e depois do processamento, mostrando a vantagem das streams para arquivos grandes.

## Como executar
```bash
node gerarLogGigante.js    # gera o servidor.log
node processarLogs.js      # filtra os erros para apenas_erros.log