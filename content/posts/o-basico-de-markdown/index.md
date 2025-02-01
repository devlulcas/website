---
title: Markdown - O básico para anotações e documentações!
tags:
  - dev
categories:
  - docs
date: 01/31/2025
draft: false
excerpt: Markdown é um dos markups mais populares que existe e você já sabe 50% dele!
---

# Markdown

![md](./md.png)

Markdown é uma linguagem de marcação criada por John Gruber e Aaron Swarts (Descanse em paz) com o objetivo de possibilitar a escrita de HTML válido com uma sintaxe mais simples.

Markdown é tão simples que você já deve ter usado sem saber em chats de aplicativos como whatsapp e discord.

## Para que serve aprender isso?

- Para usar nos seus aplicativos de anotações como notion, obsidian e logseq para melhorar suas notas.
- Para criar conteúdo escrito na internet. Você escreve em markdown no seu aplicativo preferido e converte para HTML para fazer publicações como essa aqui!
- Para trabalhar! Se você trabalha com TI vai ter que usar markdown para fazer documentações dos projetos e de negócio em plataformas como github, confluent docs, gmail, mkdocs e etc.
- Só para saber mesmo. Você vai achar um jeito de usar markdown! Tem muito suporte e é fácil de aprender.

## Sintaxe

No markdown nós usamos caracteres como `#` para denominar o que seria um título `h1, h1, h3, h4, h5, h6` do HTML.

```md
# Isso é um título h1

## Isso é um título h2

### Isso é um título h3
```

Um parágrafo é qualquer bloco de texto separado por uma quebra de linha.

```md
Isso é um parágrafo.

Isso aqui é outro parágrafo!
```

Para formatar texto em negrito, itálico, rasurado é assim que fazemos:

```md
texto **em negrito**
texto _em itálico_
texto **_em itálico e negrito ao mesmo tempo_**
texto ~~rasurado~~
```

Para listar com ordenamento é só fazer o seguinte:

```md
1. Primeiro
2. Segundo
3. Terceiro
4. Quarto
5. Quinto
```

Se a lista não tem ordem (caso mais comum) é mais fácil ainda, você pode usar `*, - ou +` (geralmente `-`):

```md
- 2 xícaras de farinha
- 2 ovos
- 200ml de leite
- 1 xícara de açúcar
- 2 colheres de margarina
- Um tico de essência de baunilha
```

Se sua lista dem uma lista dentro, não se avexe, é só dar um <kbd>tab</kbd>:

```md
1. Colete os itens
   - Lanterna
   - Ferramentas
   - Luva
2. Faça o serviço
   1. Remova a proteção
   2. Faça os reparos
   3. Coloque a proteção de volta
3. Cobre e vá para casa
```

Se você faz anotações é bem provável que queira fazer uma citação, essas são feitas assim:

```md
> Eu acho isso aqui muito útil para guardar os pensamentos sem rumo!
```

Para anotações com códigos você vai usar as crases sem mais nada:

```md
Aí você vai lá e chama a função `reviraTudo()` e ela te retorna a `string` com caracteres invertidos.
```

outras vezes você precisa mais do que um pedacinho de código no meio de um outro texto, você quer um bloco de texto mesmo:

```md
\`\`\`js
console.log('olá amigo!')
\`\`\`
```

geralmente com a conversão para HTML é feito o syntax highlight resultando nisso aqui:

```js
console.log('olá amigo!');
```

> Até agora você já viu como criar títulos, formatar texto com negrito e etc, criar listas, blocos de código e citações. Agora vamos aprender o que eu acho que é o mais difícil do markdown básico: links e imagens.

Links são estranhos, você tem duas partes `[o texto]` e `(www.o_link_em_si.com)` que são usados juntos desse jeito: `[o texto](www.o_link_em_si.com)`:

```md
Esse conteúdo foi baseado na documentação disponível no site [Markdown Guide - Basic syntax](https://www.markdownguide.org/basic-syntax/)
```

> Esse conteúdo foi baseado na documentação disponível no site [Markdown Guide - Basic syntax](https://www.markdownguide.org/basic-syntax/)

Para usar imagens é muito parecido:

1. Primeiro o texto alternativo = `[texto alternativo para a imagem]`
2. Depois o link da imagem = `(www.imagens_muito_massa.com/imagem.png)` ou `(./imagem_local.avif)`
3. E aí você monta tudo e coloca um **!** no começo para diferenciar imagens de links: `![texto alternativo para a imagem](./imagem_local.avif)`

```md
![eu](https://github.com/devlulcas.png)
![pato](./duck.jpg)
```

![pato](./duck.jpg)

---

Nada te impede de colocar divisórias também. O texto `---` se transforma em um `<hr>` como foi feito acima e logo abaixo

---

Esse foi o básico de markdown para sobreviver! Ainda existe mais sintaxe, mas o que eu apresentei aqui é a parte mais usada.

Você pode continuar aprendendo e pesquisar mais sobre:

- Tabelas no markdown
- URLs no markdown
  > Isso aqui é para quando você quer que o texto e o href do link sejam os mesmo, como num email. Para isso basta usar dois sinais de maior e menor que assim: `<meu_email@exemplo.com>` que ele vai ser renderizado como <meu_email@exemplo.com>
- Links de referência no markdown

Enfim. Boa sorte!
