# TSUP

Agora que eu já falei sobre bundlers no geral eu acho legal falar do TSUP, que é uma ferramenta de bundling bem simplista.

O TSUP é uma abstração em cima do esbuild, que é um bundler que tem um tempo de build bem rápido. Ele traz uma configuração bem simples e permite que você gere como output tanto arquivos Javascript usando ESModules (`import` e `export`) quanto arquivos CommonJS (`require` e `module.exports`) para serem usados em projetos que ainda não suportam ESModules (que são muitos quando a gente fala de backend com Javascript, já que o NodeJS só começou a suportar ESModules depois de se tornar mais popular).

```ts
// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
});
```

Com essa configuração o TSUP vai pegar o arquivo `src/index.ts` e gerar dois arquivos na pasta `dist`: um com o código CommonJS e outro com o código ESModules.

Ele vai resolver as dependências do seu código e gerar um arquivo só com o que você precisa, sem nada a mais.

Eu usei ele nessa demo do fastify rodando na vercel:
https://github.com/devlulcas/fastify-typescript-vercel-demo/blob/main/tsup.config.ts

Nesse mini projeto de websockets que não funciona como deveria:
https://github.com/devlulcas/tiny-chat/blob/main/apps/server/tsup.config.ts

Nessa biblioteca para adicionar coisas a mais no markdown do meu blogzinho:
https://github.com/devlulcas/dvl-md/blob/main/tsup.config.ts

TSUP é show para libs e códigos backend TypeScript, mas para projetos frontend eu ainda prefiro o Vite com o esbuild.

![TSUP](cat.gif)
