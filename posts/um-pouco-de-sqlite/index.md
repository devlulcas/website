---
title: Um pouco de SQLite
draft: false
tags:
  - sqlite3
  - notes
  - database
categories:
  - none
date: 04/12/2023
excerpt: Resumo leve sobre o SQLite3
---

# SQLITE3

O banco de dados mais simples que eu conheço. Extremamente prático e fácil.
Suas features não são tão limitadas como muitos dizem e a simplicidade o torna uma ótima opção para quem está aprendendo ou até para projetos reais.

SQLite é um banco de dados relacional que não precisa de um servidor para funcionar. Ele é um banco de dados embutido, ou seja, ele é um arquivo que você pode colocar dentro do seu projeto e usar.

Ele não vai te pedir uma senha, não vai te pedir um usuário, não vai te pedir nada. Ele é um arquivo que você pode abrir e fazer operações de leitura e escrita.

Ele é muito usado em aplicações mobile, por exemplo, por ser leve e não precisar de um servidor. Também é muito usado em aplicações desktop e em aplicações web, muitas vezes como um banco de dados temporário / adicional para armazenar dados que não precisam de um banco de dados mais robusto.

![SQLite](./thumb.jpg)

## INSTALAÇÃO

Eu uso o Fedora, então a instalação é feita com o comando:

```bash
sudo dnf install sqlite
```

Para outras distros, consulte a documentação.

## A LINHA DE COMANDO

```bash
sqlite3
```

Rodar somente esse comando vai criar um banco temporário na memória para que o usuário faça operações. Se você quiser criar um banco de dados em um arquivo, você pode rodar o comando:

```bash
sqlite3 database.db
```

Rodar esse comando vai abrir um prompt para execução de SQL se o arquivo existir. Se não existir um novo banco sera criado com este nome.

Em uma breve pesquisa vi que é possível usar as seguintes extensões para arquivos de bancos de dados SQLite3: `.sqlite, .sqlite3, .db, .db3, .s3db, .sl3`

Acredito que seja possível criar o arquivo sem extensão também.

### DOT COMMANDS

Na CLI do SQLite3 é possível usar uns comandos especiais que começam com a letra `.`

Ex:

- `.excel` esse eu achei curioso, ele mostra o resultado do próximo comando como uma tabela do excel

- `.lint` esse reposta possíveis problemas com o schema do banco

- `.save banco.db` esse salva o banco de dados que você criou na memória (com `sqlite3`) em um arquivo `banco.db`

- `.tables` esse mostra suas tabelas

- `.mode` esse altera a forma como as paradas aparecem

Você pode fazer com que resultados apareçam das seguintes formas:

- ASCII
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

No SQLite existem diferentes formas de armazenar os valores dependendo do seu tipo, essas formas de armazenar os valores são chamadas de _Storage Classes_.

- NULL

Usado para guardar qualquer valore nulo.

- INTEGER

Qualquer valor numérico é armazenado como um inteiro com seu sinal. O tamanho pode variar de 1 até 8 bytes de armazenamento, dependendo do valor do número.

- REAL

Números de ponto flutuante são armazenados em 8 bytes de armazenamento.

- TEXT

Armazena quaisquer strings de texto. Suporta UTF-8 e afins.

- BLOB

Armazena dados grandes, como imagens, em arrays de bytes do jeito que foi inserido no banco.

Tipos de afinidade são tipos atribuidos a uma coluna em uma tabela. São mais recomendações do que regras.

> Byte é byte, caiu na vila o peixe fuzila ~ Alan Turing, confia.

Os tipos de afinidade são: TEXT, NUMERIC, INTEGER, REAL e o BLOB

Isso afeta o Vasco da seguinte maneira:

Você vai declarar que a coluna CRIADO_EM como TIMESTAMP, por exemplo, só que a gente não tem uma storage class TIMESTAMP, o que temos é um afinidade entre esse TIPO DECLARADO e uma STORAGE CLASS.

Se você enfiar uma data formatada como ISO8601, uma string, a afinidade dela nessa coluna vai ser com a storage class TEXT.

Se você enfiar um UNIX Time, vai ter afinidade com INTEGER.

_Resumindo: SQLite tem um sistema de tipos bem flexível_

## SYNTAX

Para criar uma tabela no SQLite use `CREATE TABLE` seguido do nome da tabela e dos campos que ela vai ter.

```sql
CREATE TABLE IF NOT EXISTS user (
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
CREATE TABLE IF NOT EXISTS user_without_rowid (
  uuid TEXT PRIMARY KEY,
  first_name TEXT,
  age INTEGER
) WITHOUT ROWID;
```

Se executarmos o mesmo select, não vamos ver a coluna `rowid`:

```sql
SELECT rowid FROM user_without_rowid;
```

> error: Error: no such column: rowid

Isso pode ser útil em casos onde você não precisa de uma chave primária, quando você tem uma chave primária composta ou quando você tem uma chave primária personalizada.

Além do básico, temos o básico II. Algumas das coisas que eu citei anteriormente são constraints. Podemos criar varias constraints diferentes, como `UNIQUE`, `NOT NULL`, `CHECK`, `DEFAULT`, `FOREIGN KEY`, `PRIMARY KEY`.

```sql
CREATE TABLE IF NOT EXISTS user (
  id TEXT PRIMARY KEY,
  first_name TEXT NOT NULL,
  age INTEGER CHECK (age > 0)
);
```

Desse jeito dá para reforçar algumas regras básicas direto com o banco, como essa de `age` ser maior que 0.

Você também pode adicionar uma `CHECK` constraint no nível da tabela:

```sql
CREATE TABLE IF NOT EXISTS user (
  id TEXT PRIMARY KEY,
  first_name TEXT NOT NULL,
  age INTEGER,
  driver_license TEXT,

  CHECK (age > 18 AND length(driver_license) = 11)
);
```

Caso você queira adicionar uma `CHECK` constraint em uma tabela que já existe você pode criar uma nova com essa regra e então migrar os dados:

```sql
INSERT INTO new_user SELECT * FROM user WHERE age > 18 AND length(driver_license) = 11;

DROP TABLE user;

ALTER TABLE new_user RENAME TO user;
```

> info: Isso adiciona uma nova tabela `new_user` com a constraint e então migra os dados da tabela `user` para a nova tabela. Depois a tabela `user` é deletada e a nova tabela é renomeada para `user`.

## FOREIGN KEYS

Para criamos uma chave estrangeira, precisamos de duas tabelas. Uma tabela que tem a chave primária e outra tabela que tem a chave estrangeira.

```sql
CREATE TABLE IF NOT EXISTS user (
  id TEXT PRIMARY KEY,
  first_name TEXT,
  age INTEGER
);

CREATE TABLE IF NOT EXISTS post (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  content TEXT,
  FOREIGN KEY (user_id) REFERENCES user(id)
);
```

Nesse exemplo, a tabela `post` tem uma chave estrangeira `user_id` que referencia a chave primária `id` da tabela `user`. Agora essa chave estrangeira vai garantir que não vamos ter um post sem um usuário.

Podemos adicionar a ação `ON DELETE` para quando um usuário for deletado:

```sql
CREATE TABLE IF NOT EXISTS post (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  content TEXT,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);
```

Dessa forma, se um usuário for deletado, todos os posts desse usuário também serão deletados.

Também é possível adicionar outras ações como `RESTRICT`, `SET NULL` e `SET DEFAULT`.

Se você decidiu adicionar uma chave estrangeira em uma tabela que já existe, você pode fazer isso com o comando `ALTER TABLE`:

```sql
ALTER TABLE post ADD FOREIGN KEY (user_id) REFERENCES user(id);
```

Agora basta adicionar os dados:

```sql
INSERT INTO user (id, first_name, age) VALUES ('random_uuid', 'John', 20);
INSERT INTO post (id, user_id, content) VALUES ('random_uuid', 'random_uuid', 'Hello World');
```

E fazer um select:

```sql
SELECT * FROM post;
```

Ou um join:

```sql
SELECT * FROM post JOIN user ON post.user_id = user.id;
```

Talvez você queira deletar um usuário e todos os posts dele:

```sql
DELETE FROM user WHERE id = 'random_uuid';
```

Ou então alterar o conteúdo de um post:

```sql
UPDATE post SET content = 'Hello World 2' WHERE id = 'random_uuid';
```

## INDEXES

Para criar um índice em uma tabela, você pode usar o comando `CREATE INDEX`:

```sql
CREATE INDEX IF NOT EXISTS user_index ON user (first_name);
```

Esse comando cria um índice chamado `user_index` na tabela `user` para a coluna `first_name`. Isso pode ser útil para acelerar buscas em tabelas grandes.

Você pode criar índices compostos também:

```sql
CREATE INDEX IF NOT EXISTS user_index ON user (first_name, age);
```

## VIEWS

Para criar uma view, você pode usar o comando `CREATE VIEW`:

```sql
CREATE VIEW IF NOT EXISTS adult_user_view AS SELECT * FROM user WHERE age > 18;
```

Agora podemos fazer um select na view:

```sql
SELECT * FROM adult_user_view;
```

Views são bem legais quando você tem selects complicados que são usados com frequência. No nosso exemplo tudo é muito simples, mas na vida real você vai criar views com vários joins e filtros.

## TRIGGERS

Para criar um trigger, você pode usar o comando `CREATE TRIGGER`:

```sql
CREATE TABLE IF NOT EXISTS user (
  id TEXT PRIMARY KEY,
  first_name TEXT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);

CREATE TRIGGER IF NOT EXISTS update_user_updated_at AFTER UPDATE ON user BEGIN
  UPDATE user SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;
```

Esse comando cria um trigger que atualiza a coluna `updated_at` toda vez que a coluna `first_name` é atualizada.

Você pode criar triggers que serão executados antes ou depois de um insert, update ou delete em uma tabela.

## TRANSACTIONS

No SQLite você pode usar transações para garantir que um conjunto de operações seja executado com sucesso ou que nada seja executado. Isso torna o SQLite um banco de dados ACID.

Para começar uma transação, você pode usar o comando `BEGIN TRANSACTION`:

```sql
BEGIN TRANSACTION;
```

Agora você pode fazer várias operações:

```sql
INSERT INTO user (id, first_name, age) VALUES ('random_uuid', 'John', 20);
INSERT INTO post (id, user_id, content) VALUES ('random_uuid', 'random_uuid', 'Hello World');
```

E então você pode confirmar a transação com o comando `COMMIT`:

```sql
COMMIT;
```

Recomendo que você faça isso sempre que for alterar o banco de dados manualmente. Isso garante que você tem uma chance de desfazer as operações caso algo dê errado.

Para desfazer uma transação, você pode usar o comando `ROLLBACK`:

```sql
ROLLBACK;
```

Isso vai desfazer todas as operações que você fez desde o `BEGIN TRANSACTION`.

## BACKUP

Para fazer um backup de um banco de dados SQLite, você pode usar o comando `.backup`:

```sql
.backup backup.db
```

Com isso a gente tem um `backup.db` com o banco de dados atual.

## RESTORE

Para restaurar um banco de dados SQLite, você pode usar o comando `.restore`:

```sql
.restore backup.db
```

Agora o banco de dados atual é substituído pelo `backup.db`.

## REFERÊNCIAS

- [SQLite Documentation](https://www.sqlite.org/docs.html)
- [SQLite Tutorial](https://www.sqlitetutorial.net/)

![SQLite](./sqlite.png)
