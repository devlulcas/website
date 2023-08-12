---
title: Um pouco de SQLite
tags:
  - sqlite3
  - notes
  - database
categories:
  - none
date: 04/12/2023
excerpt: Aprendendo um pouco sobre SQLite3
---

# SQLITE3

O banco de dados mais simples que eu conheço. Extremamente prático e fácil.
Suas features são limitadas quando comparado com bancos mais robustos como Postgres e Firebird (não ironicamente), mas ao mesmo tempo está sendo usado para projetos ambiciosos como Edge Databases.

Enfim... vale a pena aprender um pouco!

## A LINHA DE COMANDO

> sqlite3

Rodar somente esse comando vai criar um banco temporário na memória para que o usuário faça operações

> sqlite3 database.db

Rodar esse comando vai abrir um prompt para execução de SQL se o arquivo existir. Se não existir um novo banco sera criado com este nome.

Em uma breve pesquisa vi que é possível usar as seguintes extensões para arquivos de bancos de dados SQLite3: `.sqlite, .sqlite3, .db, .db3, .s3db, .sl3`

Acredito que seja possível criar o arquivo sem extensão também.

> dot commands

Na CLI do SQLite3 é possível usar uns comandos especiais que começam com a letra `.`

Ex:

- `.excel` esse eu achei curioso, ele mostra o resultado do próximo comando como uma tabela do excel

- `.lint` esse reposta possíveis problemas com o schema do banco

- `.save banco.db` esse salva o banco de dados que você criou na memória (com `sqlite3`) em um arquivo `banco.db`

- `.tables` esse mostra suas tabelas

- `.mode` esse altera a forma como as paradas aparecem

> .mode

Você pode fazer com que resultados apareçam das seguintes formas:

- ascii
- box
- csv
- column
- html
- insert
- json
- line
- list
- markdown
- quote
- table

Isso na CLI, claro, quando você estiver executando SQL na sua linguagem de programação o rolê é diferente.

## DATA TYPES

No sqlite existem diferentes formas de armazenar os valores dependendo do seu tipo, essas formas de armazenar os valores são chamadas de _Storage Classes_.

- NULL

Usado para guardar qualquer valore nulo.

- INTEGER

Qualquer valor numérico é armazenado como um inteiro com seu sinal. O tamanho pode variar de 1 até 8 bytes de armazenamento, dependendo do valor do número.

- REAL

Números de ponto flutuante são armazenados em 8 bytes de armazenamento.

- TEXT

Armazena quaisquer strings de texto. Suporta UTF-8 e afins.

- BLOB

Armazena dados grandes, como imagens, em arrays de bytes do jeito que foi enfiado no banco.

Tipos de afinidade são tipos atribuidos a uma coluna em uma tabela. São mais recomendações do que regras.

> Byte é byte, caiu na vila o peixe fuzila ~ Alan Turing, criador da putaria

Os tipos de afinidade são: TEXT, NUMERIC, INTEGER, REAL e o BLOB

Isso afeta o Vasco da seguinte maneira:

Você vai declarar que a coluna CRIADO_EM como TIMESTAMP, por exemplo, só que a gente não tem uma storage class TIMESTAMP, o que temos é um afinidade entre esse TIPO DECLARADO e uma STORAGE CLASS.

Se você enfiar uma data formatada como ISO8601, uma string, a afinidade dela nessa coluna vai ser com a storage class TEXT.

Se você enfiar um UNIX Time, vai ter afinidade com INTEGER.

_Resumindo: SQLite te deixa fazer coisas que rendem surras em outros bancos, graças ao seu sistema de tipos flexível_

## SYNTAX

Para criar uma tabela no sqlite use `CREATE TABLE` seguido do nome da tabela e dos campos que ela vai ter.

```sql
CREATE TABLE user (
  id TEXT PRIMARY KEY,
  first_name  TEXT,
  age INTEGER
);
```

Os campos são separados por vírgula e cada campo tem um nome e um tipo.

O tipo pode ser um dos tipos de storage class ou um dos tipos de afinidade.

Além disso, você pode declarar algumas coisas como:

- `NOT NULL` - o campo não pode ser nulo

- `UNIQUE` - o campo não pode ter valores repetidos

> info: Curiosidade: Em muitos casos UNIQUE e PRIMARY KEY são implementados criando um índice para a coluna. Com exceção de quando você cria uma chave primária com o tipo `INTEGER PRIMARY KEY` que é um tipo especial que é auto incrementado. O esquema também é diferente em chaves primárias de tabelas criadas com `WITHOUT ROWID`.

- `PRIMARY KEY` - o campo é uma chave primária

- `DEFAULT` - o campo tem um valor padrão

- `CHECK` - o campo tem uma condição para ser válido

> info: A condição é evaluada e um valor numérico é retornado. Se o valor for 0, o valor é inválido. Essa checagem ocorre apenas durante operações de escrita.

```sql
CREATE TABLE user (
  id TEXT PRIMARY KEY,
  first_name  TEXT,
  age INTEGER CHECK (age > 0)
);
```

- `FOREIGN KEY` - o campo é uma chave estrangeira

- `REFERENCES` - o campo referencia uma tabela

- `ON DELETE` - o campo tem uma ação para quando a chave estrangeira for deletada

- `ON UPDATE` - o campo tem uma ação para quando a chave estrangeira for atualizada

Por padrão toda tabela tem uma coluna especial chamada `ROWID` que é um número único para cada linha da tabela. Você pode usar essa coluna para fazer referência a uma linha específica da tabela. Essa coluna existe mesmo quando definimos uma chave primária (no exemplo acima, a coluna `id` onde um UUID pode ser inserido).

Por exemplo, se você quiser inserir um usuário com um ID específico, você pode fazer isso:

```sql
INSERT INTO user (id, name, age) VALUES ('random_uuid_1', 'John', 20);
```

Se fizermos um select na tabela, vamos ver que a coluna `id` tem o valor que inserimos.

```sql
SELECT * FROM user;
```

| id            | first_name | age |
| ------------- | ---------- | --- |
| random_uuid_1 | John       | 20  |

```sql
SELECT rowid FROM user;
```

| rowid |
| ----- |
| 1     |

Você pode optar por não criar essa coluna com o comando `WITHOUT ROWID`:

```sql
CREATE TABLE user_without_rowid (
  id TEXT PRIMARY KEY,
  first_name  TEXT,
  age INTEGER
) WITHOUT ROWID;
```

Se executarmos o mesmo select, não vamos ver a coluna `rowid`:

```sql
SELECT rowid FROM  user_without_rowid;
```

> danger: Error: no such column: rowid

## REFERÊNCIAS

- [SQLite Documentation](https://www.sqlite.org/docs.html)
