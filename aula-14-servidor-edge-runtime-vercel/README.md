06/10/2026

# Aula 14 — Servidor Edge Runtime com Vercel

Função serverless que roda na **borda de rede (Edge)**, publicada na **Vercel**.

## Objetivos


- Criar uma função `handler` com a API padrão `Request` / `Response`
- Usar a **Vercel CLI** (`login`, `dev`, deploy)
- Testar a rota localhost com o Thunder Client

## Estrutura

```
aula-14-servidor-edge-runtime-vercel/
├── api/
│   └── hora-servidor.ts
├── package.json
└── README.md
```

## Código — `api/hora-servidor.ts`

```ts
export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  const inicio = new Date();

  return new Response(
    JSON.stringify({
      mensagem: 'Função executada na borda de rede',
      horarioDoServidor: new Date().toISOString(),
      regiao: 'local-dev',
      tempoDeExecucao: `${Date.now() - inicio.getTime()} ms`,
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    },
  );
}
```

## Passo a passo

1. Instalar a CLI: `npm install -g vercel` (sem permissão: `npx vercel`)
2. Login: `vercel login`
3. Deploy: `vercel` (Create a new project, Git: no, Customize: no)
4. Rodar local: `vercel dev` → http://localhost:3000
5. Testar (GET): `http://localhost:3000/api/hora-servidor`

Resposta esperada (200 OK):

```json
{
  "mensagem": "Função executada na borda de rede",
  "horarioDoServidor": "2026-10-07T00:02:39.325Z",
  "regiao": "local-dev",
  "tempoDeExecucao": "0 ms"
}
```

