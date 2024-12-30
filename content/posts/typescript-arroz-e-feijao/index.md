---
title: Typescript - Arroz e Feijão
tags:
  - dev
  - typescript
categories:
  - typescript
date: 02/27/2024
draft: true
excerpt: Anotações sobre o básico do Typescript
---

# Typescript Arroz e Feijão

A linguagem de programação Typescript é um superconjunto de Javascript que adiciona tipagem estática à linguagem. Isso significa que o Typescript é uma linguagem que permite a definição de tipos de variáveis, parâmetros de funções, retorno de funções, etc. Isso é muito útil para evitar erros de tipagem em tempo de execução, pois o Typescript já aponta esses erros em tempo de compilação.

Outro efeito de ser um superconjunto é que basicamente todo código Javascript é código Typescript válido, o que é muito bom para quem já tem um projeto em Javascript e quer migrar para Typescript. O Typescript é transpilado para Javascript, ou seja, o código Typescript é convertido para Javascript antes de ser executado. E sim, o _Typescript é uma linguagem compilada_. A palavra "transpilada" confunde algumas pessoas, mas é basicamente a mesma coisa que compilar, só que para uma linguagem de mais alto nível. Temos outros exemplos de linguagens que são transpiladas, como o CoffeeScript (RIP), que é transpilado para Javascript e V que é transpilada para C.

Um ponto importante para ressaltar é que a linguagem Typescript funciona de um jeito parecido com um "linter" na prática, ou seja, um verificador de código. Ela checa se você está fazendo besteira em tempo de compilação, mas essa informação dos tipos desaparece após você compilar para Javascript.

Isso é bom porque há pouquíssima diferença entre o código Typescript que você escreve e o código Javascript que é gerado (dependendo de como você configura o Typescript). **Você não tem checagens extra sendo adicionadas no código final** que é executado, o que é positivo para a performance do código. Contudo, isso também quer dizer que o Typescript não adiciona nenhuma segurança extra para o seu código em tempo de execução. Se você quer segurança extra, você deve usar testes unitários e testes de integração e é claro, **adicionar suas próprias validações no código**.

Essa parada das validações de tipo sumirem em tempo de execução fazem com que o Typescript não tenha uma tipagem "sound" (segura) como o Dart, por exemplo. Isso significa que o Typescript não é uma linguagem de tipagem forte, mas sim uma linguagem de tipagem estática. Isso é um ponto importante de se dizer, pois muitas pessoas confundem tipagem estática com tipagem forte. Como eu disse antes, você precisa adicionar suas próprias validações no código para ter segurança extra.

## Compilador e Typechecker

O compilador do Typescript é o `tsc`. Você pode instalar o compilador do Typescript globalmente com o comando `npm install -g typescript`. Com o compilador instalado, você pode compilar um arquivo Typescript com o comando `tsc nome-do-arquivo.ts`. Isso vai gerar um arquivo Javascript com o mesmo nome do arquivo Typescript.

O typechecker do Typescript é o `tsc` também. O typechecker é o que checa se o seu código está correto em termos de tipagem. O typechecker é ativado quando você compila um arquivo Typescript com o comando `tsc nome-do-arquivo.ts`. Se houver algum erro de tipagem, o typechecker vai apontar o erro e não vai gerar o arquivo Javascript.

O `tsc` é a única implementação de um typechecker para Typescript. Isso quer dizer que se você quiser usar Typescript, você vai ter que usar o `tsc`. Não tem como usar outro typechecker para Typescript atualmente (02/2024). Porém, existem outros compiladores para Typescript, como o `esbuild` e o `swc`, que são mais rápidos que o `tsc` e que podem ser usados para compilar código Typescript para Javascript. Você vai ver essas ferramentas sendo usadas em conjunto em muitos projetos que usam Typescript.

## Tipos

O Typescript tem vários tipos primitivos, como `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint` e `object`. Se você sabe Javascript, você já conhece esses tipos pois são os mesmos tipos primitivos do Javascript.

Além desses mais simples, o sistema de tipos do TS é muito poderoso e complexo. Você pode criar tipos que são uniões de outros tipos, interseções de outros tipos, tipos condicionais, tipos mapeados, tipos literais, tipos de template, tipos de inferência e etc.

Muitas vezes você nem precisa criar um tipo, pois o Typescript já consegue inferir o tipo de uma variável. Isso é muito útil e é uma das coisas que fazem o Typescript ser uma linguagem muito produtiva. Você pode escrever código Typescript sem precisar definir tipos para tudo, pois o Typescript vai inferir os tipos para você.

```ts
const x = 10; // O tipo de x é number
const y = '10'; // O tipo de y é string
const z = true; // O tipo de z é boolean
```

A sintaxe para atribuir tipos a variáveis e funções é bem simples na verdade. Veja abaixo exemplos de como atribuir tipos a variáveis e funções.

```ts
// const <nome-da-variável>: <tipo-da-variável> = <valor-da-variável>
const x: number = 10;

// function <nome-da-função>(<parâmetro>: <tipo-do-parâmetro>): <tipo-do-retorno> { <corpo-da-função> }
function soma(a: number, b: number): number {
	return a + b;
}
```

Você também pode definir tipos para objetos, arrays e funções.

A sintaxe para definir tipos é bem simples. Você pode definir um tipo com a palavra chave `type`:

```ts
type Pessoa = {
	nome: string;
	idade: number;
	vivo: boolean;
};

const pessoa: Pessoa = {
	nome: 'João',
	idade: 30,
	vivo: true
};
```

Usando a palavra chave `type`, você pode definir tipos mais complexos, esses tipos são úteis para expressar melhor a sua intenção no código.
