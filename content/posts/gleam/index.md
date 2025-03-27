---
title: Gleam
tags:
  - gleam
  - functional programming
  - elixir
  - erlang
  - beam
  - javascript
categories:
  - functional programming
  - elixir
  - erlang
  - beam
  - javascript
date: 03/11/2025
draft: false
excerpt: Gleam é uma linguagem de programação funcional estática para a BEAM, a máquina virtual Erlang.
---

# Gleam

![gleam](./thumb.png)

Funcional, compacta, type safe, compilada, roda tanto na BEAM quanto em ambiente JS.

Por que apender?

> É uma linguagem funcional simples, a sintaxe é agradável, roda na BEAM, tem uma comunidade pequena porém muito inclusiva e interessante.

## Módulos

O código é organizado em módulos. Módulos são grupos de funções, tipos e etc que estão agrupados. Módulos são definidos pelo caminho até o arquivo em que está. `/gleam/io.gleam`= `gleam/io`.

Usamos a palavra-chave `import` para importar módulos e o nome do módulo é o nome do arquivo. Podemos usar _aliasing_ com `as` para renomear.

Para usar funções de um módulo usamos o nome do módulo + ponto + função. Como em `io.println`. Caso queira usar diretamente, tem que listar a função na hora da importação:

```gleam
import gleam/io.{println}
```

Geralmente é melhor usar o nome qualificado `io.println` ao invés dessa versão extraída, mas caso seja necessário é assim que se faz.

Para que um tipo ou função seja acessado fora do módulo onde foi definida ela deve ter a palavra `pub` antes de sua declaração:

```gleam
import gleam/io

pub type UserId =
  Int

pub fn main() {
  let one: UserId = 1
  io.debug(one)
}
```

> Curiosidade: Comentários com quatro barras `////` podem ser usados para documentar um módulo. Eles precisam estar no topo do arquivo.

```gleam
//// Módulo motivacional

pub fn doIt() {
  todo
}

pub fn justDoIt() {
  doIt()
}
```

## Tipagem

Gleam não tem null, não tem conversões implícitas, não tem exceções e faz checagem completa. Se compila os tipos estão corretos e o executável é razoavelmente confiável.

Inteiros = `Int`
Rodando na BEAM os inteiros não limite nem tamanho mínimo, já como JS os inteiros são floating point numbers de 64 bits.
Operações aritméticas funcionam em inteiros, assim como o operador de igualdade e o módulo `gleam/int` tem funções úteis para trabalhar com ints.

Reais = `Float`
Diferente do que eu geralmente acostumado, os operadores aritméticos não são iguais entre inteiros e floats. Os operadores para floats são seguidos por um ponto: `>. <. >=. <=. +. -. /. *.` .
Floats tem 64 bits na BEAM e no JS. Floats são tratados de forma nativa por cada ambiente, então o comportamento pode variar com o alvo de compilação. Um ponto disso é que passar do limite mínimo ou máximo de um float faz com que uma exceção seja gerada no runtime Erlang, mas no JS resultará em `-Infinity` ou `Infinity`.
Outra curiosidade é que dividir por zero na BEAM vai resultar em zero ao invés de ter um overflow.
Assim como nos inteiros, também há um módulo para floats na std lib.

No código abaixo podemos ver algumas funcionalidades interessantes como usar o underscore para separar número melhorando a leitura e `0b` para denotar binários, `0o` para octais, `0x` para hexadecimais e a possibilidade de usar notação científica na linguagem.

```gleam
import gleam/io

pub fn main() {
  // Underscores
  io.debug(1_000_000)
  io.debug(10_000.01)

  // Inteiros literais para binários, octais e hexadecimais
  io.debug(0b00001111)
  io.debug(0o17)
  io.debug(0xF)

  // Reais literais com notação científica
  io.debug(7.0e7)
  io.debug(3.0e-4)
}
```

Igualdade em gleam é checada com o sinal `==` e sua negação é `!=`. Essa checagem verifica o valor e o tipo. É uma checagem estrutural, então checar dois valores com em lugares diferentes da memória, mas que tem o mesmo formato, retorna `True`.

Texto = `String`
Strings são escritas com aspas duplas, somente aspas duplas. O operador `<>` concatena strings, semelhante a soma binária na Elixir. O módulo `gleam/string` tem utilitários como `string.reverse` e `string.append`. Várias sequencias de escape como `\n` são suportados.

Booleanos = `Bool`
Booleanos são os de sempre, só que começão com letra maiúscula: `True` e `False`.
Os operadores `||, &&, !=, ==, !` são os de sempre e temos o esquema de curto circuito, ou seja, `True || ...` faz com que `...` nunca seja executado. Também tem um módulo para booleanos na std lib.

### Usando tipos importados

Importar tipos funciona da mesma forma que funções normais, mas se for extrair tem que adicionar a palavra `type` antes:

```gleam
import gleam/bytes_tree
import gleam/string_tree.{type StringTree}

pub fn main() {
  // Usando o tipo de um módulo de forma qualificada
  let _bytes: bytes_tree.BytesTree = bytes_tree.new()

  // Usando o tipo de um módulo de forma desqualificada
  let _text: StringTree = string_tree.new()
}
```

_Type aliasing_ é possível porém não cria um novo tipo, apenas o nomeia `type UserId = Int`.

> Nomes de tipos usam PascalCase.

## Variáveis

Criamos uma com `let`, o tipo é inferido, o valor é imutável apesar de ter suporte a shadowing ao usar `let` para redeclarar a variável com o mesmo nome. Neste caso a label (nome da variável) é reutilizada, mas não seu espaço de memória.

> É relevante apontar que em gleam usamos snake_case para funções e variáveis.

No exemplo `let _name: String = "Gleam"` vemos como é possível usar anotações de tipo, mas muitas vezes elas não são necessárias e a inferência é o suficiente. É com essa mesma sintaxe que podemos tipar argumentos em uma função.

## Blocos de código

Um bloco de código é uma ou mais expressões agrupadas dentro de bigodinhos `{}`. O bloco tem escopo fechado e o valor da última expressão é retornado. Veja um exemplo de conta onde geralmente usaríamos parêntesis para alterar a ordem de prioridade.

```
import gleam/io

pub fn main() {
  // fahrenheit será 64
  let fahrenheit = {
    let degrees = 64
    degrees
  }

  // Mesmo que (fahrenheit - 32) * 5 / 9 em outras linguagems.
  let celsius = { fahrenheit - 32 } * 5 / 9
  io.debug(celsius)
}
```

## Listas

`List` é um tipo genérico, ou seja, aceita um outro tipo como parâmetro como em `List(Int)` por exemplo.
Listas são imutáveis e presentes na forma de uma _single-linked list_. São bem eficientes na remoção e adição de elementos nas pontas da lista, mas ler seu tamanho ou acessar posições específicas não é barato.

```gleam
import gleam/io

pub fn main() {
  // Temos sintaxe literal
  let ints = [1, 2, 3]

  io.debug(ints)

  // Adicionando elementos no começo de forma imutável com o spread operator ..
  io.debug([-1, 0, ..ints])

  // Listas mistas não rolam
  // io.debug(["zero", ..ints])

  // A list original fica em paz
  io.debug(ints)
}
```

## Consts

`let` já nos dá a imutabilidade, `const` são definidos no _top level_ do módulo, são valores literais (ou seja, sem chamar funções aqui) e sua utilidade é reutilizar o valor em várias funções.

## Funções

São definidas com `fn` e parecem com a sintaxe da Rust. Não é necessário anotar os tipos, mas é uma boa prática.

```gleam
import gleam/io

pub fn main() {
  io.debug(double(10))
}

fn double(a: Int) -> Int {
  multiply(a, 2)
}

fn multiply(a: Int, b: Int) -> Int {
  a * b
}
```

Funções são valores, ou seja, podem ser passadas para outras funções como argumento. Para anotar o tipo de um argumento que recebe uma função é só usar a palavra chave `fn` e ao invés de nomes, usar os tipos dos parâmetros dela: `

```fn
fn twice(argument: Int, passed_function: fn(Int) -> Int) -> Int {
  passed_function(passed_function(argument))
}
```

Pelas minhas observações _hoisting_ existe e não é necessário declarar antes de usar as funções

Funções anônimas são definidas com `fn() {}`.

Gleam tem uma feature para captura de função. Veja abaixo:

```gleam
import gleam/io

pub fn main() {
  // Tanto criar uma função anonima e ocupar um pedaço da função, quanto ocupar esse pedaço com _ tem o mesmo efeito
  let add_one_v1 = fn(x) { add(1, x) }
  let add_one_v2 = add(1, _)

  io.debug(add_one_v1(10))
  io.debug(add_one_v2(10))
}

fn add(a: Int, b: Int) -> Int {
  a + b
}
```

Gleam suporta tipos genéricos, também chamados de  *parametric polymorphism*.

```gleam
import gleam/io

pub fn main() {
  let add_one = fn(x) { x + 1 }
  let exclaim = fn(x) { x <> "!" }

  // Aqui value é tido como Int
  io.debug(twice(10, add_one))

  // Aqui value é tido como String
  io.debug(twice("Olá", exclaim))
}

// O nome `value` refere-se ao mesmo tipo várias vezes
fn twice(argument: value, my_function: fn(value) -> value) -> value {
  my_function(my_function(argument))
}
```

> Um detalhe relevante é que esses parâmetros de tipo são escritos em minúsculas.

> Curiosidade: Comentários com três barras podem ser usados para documentar funções e tipos. Você pode ainda marcar as coisas como `@deprecated("comentário")` e isso vai documentar ela como depreciada.

```gleam
//// Esse módulo só serve para exemplificar os comentários que documentam código

/// Esse tipo representa um gato
pub type Cat {
	Cat(
		furColor: String,
		age: Int
	)
}

/// Essa função cria um gato de um jeito estranho
pub fn createCat(type: String) {
	case type {
		"orange" -> Cat(furColor: type, age: 13)
		"black" -> Cat(furColor: type, age: 7)
		_ -> Cat(furColor: type, age: 0)
	}
}

@deprecated("Agora só criamos gatos!")
pub fn createDog() {
	Nil
}
```

## Pipe operator

`|>` é um trem que passa o resultado de uma função para outra como primeiro argumento, caso queira passar para outra posição use a captura de função:

```gleam
import gleam/io
import gleam/string

pub fn main() {
  // Sem pipe
  io.debug(string.drop_start(string.drop_end("Hello, Joe!", 1), 7))

  // Com pipe
  "Hello, Mike!"
  |> string.drop_end(1)
  |> string.drop_start(7)
  |> io.debug

  // Trocando a ordem com _
  "1"
  |> string.append("2")
  |> string.append("3", _)
  |> io.debug
}
```

## Labelled arguments

Assim como na Swift, a linguagem Gleam permite que você chame funções com parâmetros nomeados e também que tenha parâmetros com nomes diferentes para usar dentro do escopo da função e no momento de sua invocação.

```gleam
import gleam/io

pub fn main() {
  // Sem usar legendas
  io.debug(calculate(1, 2, 3))

  // Usando legendas
  io.debug(calculate(1, add: 2, multiply: 3))

  // Usando legendas em uma ordem diferente
  io.debug(calculate(1, multiply: 3, add: 2))
}

fn calculate(value: Int, add addend: Int, multiply multiplier: Int) {
  value * multiplier + addend
}
```

Usar ou deixar de usar legendas é com o programador já que não interfere em nada na performance. Essa funcionalidade é muito útil quando a função recebe muitos argumentos, mas também quando você quer deixar o código mais claro.
As legendas vem antes do nome interno do parâmetro e os parâmetros não nomeados vem antes deles.

Quando uma variável tem o mesmo nome que o parâmetro de uma função e essa variável vai ser passada como argumento, você pode usar um atalho que evita duplicação:

```gleam
pub fn main() {
  let quantity = 5.0
  let unit_price = 10.0
  let discount = 0.2

  // Fica bem assim, com os dois pontos depois do nome
  calculate_total_cost(quantity:, unit_price:, discount:)
}

fn calculate_total_cost(
  quantity quantity: Float,
  unit_price price: Float,
  discount discount: Float,
) -> Float {
  let subtotal = quantity *. price
  let discount = subtotal *. discount
  subtotal -. discount
}
```

Não vou dizer que acho lindo, mas é certamente uma das formas de fazer e provavelmente é a melhor forma que a sintaxe de Gleam é capaz de acomodar.

## Case

Você já viu a expressão `case` ser usada por aqui antes, eu gosto de deixar pedaços de conteúdo que só vão ser explicados depois para a mente começar a se acostumar com o que vê.

As expressões case, não são exatamente como um switch-case no JS, aqui ela é a forma mais comum de controle de fluxo da linguagem e vem com os super poderes do pattern matching!

> Pattern matching: O pattern matching em linguagens funcionais como Gleam e Elixir é uma técnica para verificar se dados correspondem a certos padrões estruturais, permitindo desestruturar e extrair valores de maneira elegante.

Gleam não tem `if, else, else if, switch case, while, for, do while, foreach, loop` ou coisa do tipo. Temos `case` para as condicionais e mais tarde eu falo o que temos para repetições.

```gleam
import gleam/int
import gleam/io

pub fn main() {
  let x = int.random(5)
  io.debug(x)

  let result = case x {
    // Faça a checagem contra valores específicos
    0 -> "Zero"
    1 -> "One"

    // Ou qualquer coisa
    _ -> "Other"
  }

  io.debug(result)
}
```

Você também pode capturar valores em variáveis:

```gleam
import gleam/int
import gleam/io

pub fn main() {
  let x = int.random(5)
  io.debug(x)

  let result = case x {
    // Faça a checagem contra valores específicos
    0 -> "Zero"
    1 -> "One"

    // Ou qualquer coisa
    other -> "It is " <> int.to_string(other)
  }

  io.debug(result)
}
```

Veja um exemplo onde checamos partes de uma string:

```gleam
import gleam/io

pub fn main() {
  io.debug(get_name("Hello, Joe"))
  io.debug(get_name("Hello, Mike"))
  io.debug(get_name("System still working?"))
}

fn get_name(x: String) -> String {
  case x {
    "Hello, " <> name -> name
    _ -> "Unknown"
  }
}
```

Usamos o operador que geralmente é visto para concatenar strings para pegar qualquer strings que comece com `"Hello, "`.

Lembra do spread pattern? Aquele assim `..`. Com ele podemos fazer pattern matching em listas:

```gleam
import gleam/int
import gleam/io
import gleam/list

pub fn main() {
	// Gera uma lista com 5 números aleatórios
	let x = list.repeat(int.random(5). times: int.random(3))

	io.debug(x)

	let result = case x {
		[] -> "Vazia!"
		[1] -> "Número 1 sozinho"
		[4, ..] -> "Começa com 4 e termina com outros"
		[_, _] -> "Dois elementos e não me importo com nenhum deles"
		_ -> "Qualquer coisa"
	}

	io.debug(result)
}
```

Veja só que potencial massa!

### Pattern matching em mais de um item

É possível checar mais de um valor por vez também. Esse comportamento é bem intuitivo

```gleam
import gleam/int
import gleam/io

pub fn main() {
  let x = int.random(2)
  let y = int.random(2)
  io.debug(x)
  io.debug(y)

  let result = case x, y {
    0, 0 -> "Both are zero"
    0, 1 -> "First is zero"
    _, 0 -> "Second is zero"
    _, _ -> {
      // PS: Podemos usar blocos de códigos em expressões case
	  io.debug("Vasco da Gama")
      "Neither are zero"
    }
  }

  io.debug(result)
}
```

### Pattern matching com padrões alternativos

Usando `|` você pode oferecer varias opções de valor para checar contra o que você passou no `case`.

```gleam
import gleam/int
import gleam/io

pub fn main() {
  let number = int.random(10)
  io.debug(number)

  let result = case number {
    2 | 4 | 6 | 8 -> "This is an even number"
    1 | 3 | 5 | 7 -> "This is an odd number"
    _ -> "I'm not sure"
  }
  io.debug(result)
}
```

Isso é melhor que ter várias linhas no case e fazer a mesma coisa no fim das contas. Infelizmente a sintaxe `[1 | 2 | 3]` não é válida pois esse tipo de padrão alternativo não pode ser aninhado.

## Recursão

A recursão é uma forma de fazer repetições que pode ser meio intimidadora, mas é o que temos em Gleam.

> Lembrete: Sempre que fizer recursão, lembre-se de ter um caso base onde o valor retornado não é uma nova chamada para a função atual ou outra que possa estar fazendo recursão cruzada com a atual. Evite um loop infinito, sua _stack_ agradece!

Recursão precisa de pelo menos um caso base e um caso recursivo.

```gleam
import gleam/io

pub fn main() {
  io.debug(factorial(5))
  io.debug(factorial(7))
}

pub fn factorial(x: Int) -> Int {
  case x {
    // Casos base
    0 -> 1
    1 -> 1

    // Caso recursivo
    _ -> x * factorial(x - 1)
  }
}
```

Apesar dessa ser a única forma disponível na linguagem, você ainda pode ser que nem precise usar com frequência pois a biblioteca padrão oferece várias formas de fazer um loop para situações cotidianas como iterar sobre uma lista, mapear os dados, filtrar, etc.

### Tail call optimization

Um ponto importante sobre recursão é que quando uma função é chamada, um novo frame de pilha (também chamado de _stack frame_) é criado na memória para armazenar os argumentos e variáveis locais da função. Se muitos desses frames forem criados durante a recursão, o programa usaria uma grande quantidade de memória, ou até poderia quebrar se algum limite fosse atingido.

Esse problema é chamado de estouro de pilha ou _stack overflow_. Problema clássico.

Para evitar esse problema, Gleam suporta _otimização de chamada em cauda_, que permite que o frame de pilha da função atual seja reutilizado se a chamada de função for a última coisa que a função faz, eliminando o custo de memória.

> Lengo lengo: Ixe meu consagrado! Não escrevi desse jeito e aí como faço para otimizar minha recursão?

Esfrie o leite minha patroa. O esquema é utilizar um _accumulator_.
Funções recursivas não otimizadas podem frequentemente ser reescritas como funções com otimização de cauda usando um acumulador. Um acumulador é uma variável que é passada junto com os dados, similar a uma variável mutável em linguagens com loops `while`.

```gleam
import gleam/io

pub fn main() {
  io.debug(factorial(5))
  io.debug(factorial(7))
}

pub fn factorial(x: Int) -> Int {
  // A documentação recomenda que o seu acumulador seja apenas um detalhe de implementação, ou seja, deve ser mantido escondido por um combo de função privada + pública
  factorial_loop(x, 1)
}

fn factorial_loop(x: Int, accumulator: Int) -> Int {
  case x {
    0 -> accumulator
    1 -> accumulator

    // A última coisa que essa função faz é chamar a si mesma
    // No exemplo anterior a última coisa que faziamos era múltiplicar dois inteiros com aquele `x * factorial(x - 1)`
    _ -> factorial_loop(x - 1, accumulator * x)
  }
}
```

### Recursão em listas

Boa parte das vezes você vai usar um método exposto pelo módulo `gleam/list`, mas as vezes você quer atravessar a lista manualmente.

```gleam
import gleam/io

pub fn main() {
  let sum = sum_list([18, 56, 35, 85, 91], 0)
  io.debug(sum)
}

fn sum_list(list: List(Int), total: Int) -> Int {
  case list {
    [first, ..rest] -> sum_list(rest, total + first)
    [] -> total
  }
}
```

No exemplo acima vemos como isso pode ser feito com recursão e pattern matching. Chamamos sum_list passando uma lista e o valor total que funciona como acumulador.

Depois extraímos o primeiro elemento da lista (`first`), condensamos o restante na variável `rest` e então chamamos `sum_list` novamente passando o que sobrou da lista e somamos `first` no acumulador, passando como segundo o novo valor de `total`. Caso a lista esteja vazia, retornamos somente o acumulador.
Essa função é otimizada pois quando batemos na primeira condição, que é o nosso caso recursivo, a última (e única) coisa que fazemos é chamar a função novamente.
