---
slug: como-fazer-deploy-nextjs-sem-vercel-ou-docker
title: Como fazer deploy de um projeto Next.js sem utilizar a Vercel
thumbnail: /hamster.gif
alt: hamster
tags:
  - dev
  - wip
  - nextjs
date: 22/12/2022
excerpt: Como fazer deploy de um projeto Next.js sem utilizar a Vercel
---

# Como fazer deploy de um projeto Next.js sem utilizar a Vercel

No mundo ideal, o deploy de um projeto Next.js seria feito utilizando a Vercel. Mas, se você não pode utilizar a Vercel, ou se você quer aprender como fazer o deploy de um projeto Next.js sem utilizar a Vercel, este artigo é para você.

As instruções a seguir são baseadas em um Dockerfile que é utilizado no exemplo [Deploy NextJS with Docker](https://github.com/vercel/next.js/tree/canary/examples/with-docker). O Dockerfile é um ótimo ponto de partida, mas talvez você não queira _(ou não possa)_ utilizar o Docker para fazer o deploy do seu projeto. Neste caso, você pode seguir as instruções a seguir para fazer o deploy do seu projeto Next.js sem utilizar o Docker.

## Pré-requisitos para o deploy

> Os próximos passos são baseados em um ambiente Linux. Se você estiver utilizando um ambiente Windows, você pode utilizar o [WSL](https://learn.microsoft.com/pt-br/windows/wsl/install) para executar os comandos a seguir.

- Instale o Node.js na sua máquina local

É recomendado usar a versão LTS do Node.js. Você pode baixar [a versão LTS mais recente aqui](https://nodejs.org/en/download/).

> Se você estiver utilizando o [NVM](https://github.com/nvm-sh/nvm) para gerenciar as versões do Node.js, você pode instalar a versão LTS mais recente com o seguinte comando:

```bash
nvm install --lts
```

- Instale o PNPM na sua máquina local

O PNPM é um gerenciador de pacotes mais rápido e mais seguro que o npm. Ele também é mais fácil de usar do que o Yarn. Se você não possui o PNPM instalado, você pode instalá-lo assim:

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

- Clone o repositório do projeto para sua máquina local

Agora que temos as dependências de sistema instaladas, podemos clonar o repositório do projeto.

```bash
git clone seu-repositório
```

- Instale as dependências do projeto na sua máquina local

Com o PNPM instalado, você pode instalar as dependências do projeto com o seguinte comando:

```bash
pnpm install --frozen-lockfile
```

A flag `--frozen-lockfile` é usado para garantir que as dependências instaladas são as mesmas que estão no arquivo `pnpm-lock.yaml`.

- Configure o projeto para criar um build standalone

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
};

module.exports = nextConfig;
```

No arquivo `next.config.js` a configuração `output: 'standalone'` é usada para que o Next.js crie uma pasta `.next/standalone` com apenas os arquivos necessários para um ambiente de produção.

Utilizando esta configuração, o Next.js também cria um arquivo `.next/standalone/server.js` que é o arquivo que deve ser executado para iniciar o servidor em produção.

- Construa o projeto

Para construir o projeto, execute o seguinte comando:

```bash
pnpm build
```

- Copie os arquivos estáticos

Arquivos estáticos devem ser copiados para a pasta `.next/standalone` para que o servidor possa acessá-los. No mundo ideal esses arquivos estariam em um CDN. Mas, se você não pode utilizar um CDN, você pode copiar os arquivos estáticos para a pasta `.next/standalone` assim:

```bash
cp -r public .next/standalone/public
cp -r .next/static .next/standalone/static
```

- Copie a `.next/standalone` para o servidor de produção

> O servidor em produção deve possuir o Node.js instalado.

```bash
scp -r .next/standalone <user>@<host>:<path>
```

## No servidor de produção

Garanta que o servidor de produção possui o Node.js instalado.

- Instale o PNPM

No servidor podemos usar o PNPM para instalar versões específicas de Node.js e para instalar algumas outras dependências.

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

- Configure suas variáveis de ambiente

```bash
export NODE_ENV=production
```

- Instale o sharp

Seu projeto provavelmente utiliza o [sharp](https://sharp.pixelplumbing.com/) para redimensionar imagens. Instale o pacote para versão de produção assim:

```bash
cd standalone
pnpm add sharp
cd ..
```

- Instale o PM2

O PM2 é um gerenciador de processos que pode ser utilizado para iniciar o servidor em produção.

```bash
pnpm add -g pm2@latest
```

- Inicie o servidor em produção

```bash
pm2 start standalone/server.js -i max
```

> `-i max` é usado para iniciar o servidor em produção com o número máximo de instâncias possíveis.

OBS: Para manter o servidor em produção ativo mesmo após o fechamento da sessão, você pode utilizar o comando `pm2 startup` para configurar o PM2 para iniciar automaticamente quando o servidor for iniciado. Para mais informações, consulte a [documentação do PM2](https://pm2.keymetrics.io/docs/usage/startup/).

- Problemas comuns

Se você estiver com problemas carregando arquivos CSS ou imagens, você pode tentar adicionar o Nginx como um proxy reverso para o servidor em produção.

```nginx
upstream your_nodejs_upstream {
    server 127.0.0.1:3000;
    keepalive 64;
}

server {
    listen 80;
    listen [::]:80;

    server_name www.yourdomain.com;

    location / {
    	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Real-IP $remote_addr;
    	proxy_set_header Host $http_host;

    	proxy_http_version 1.1;
    	proxy_set_header Upgrade $http_upgrade;
    	proxy_set_header Connection "upgrade";

    	proxy_pass http://your_nodejs_upstream/;
    	proxy_redirect off;
    	proxy_read_timeout 240s;
    }

    location ~ ^/_next/static/(.*)$ {
      root /.next;
      try_files "/static/$1" "/server/static/o$1" @proxy_pass;
    }

    root /.next/server/pages;
    index index.html;
}
```

## Para mais informações consulte as seguintes URLs

- [Next.js Documentation](https://nextjs.org/docs)
- [Deploy NextJS with Docker](https://github.com/vercel/next.js/tree/canary/examples/with-docker)
- [PNPM](https://pnpm.io/)
- [Sharp](https://sharp.pixelplumbing.com/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Next.js Configuration](https://nextjs.org/docs/api-reference/next.config.js/introduction)
- [NodeJS](https://nodejs.org/en/)
- [SCP](https://www.hostinger.com.br/tutoriais/usar-comando-scp-linux-para-transferir-arquivos)
- [Sobre o Output File Tracing e a build standalone](https://nextjs.org/docs/advanced-features/output-file-tracing)
- [NVM](https://github.com/nvm-sh/nvm)
- [PM2](https://pm2.keymetrics.io/)
- [WSL](https://learn.microsoft.com/pt-br/windows/wsl/install)
- [PM2 Cluster Mode](https://pm2.keymetrics.io/docs/usage/cluster-mode/)
- [PM2 Quick Start](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [PM2 Startup](https://pm2.keymetrics.io/docs/usage/startup/)

```

```
