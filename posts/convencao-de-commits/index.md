---
title: Convenções de commits
tags:
  - git
  - dev
  - convenções
categories:
  - git
  - dev
  - convenções
date: 16/05/2022
updated: 16/05/2022
lang: pt-br
excerpt: Como escrever bons commits para ter um versionamento mais inteligível
---

# 📏 CONVENÇÃO DE COMMITS

![git](./git.png)

> As mensagens de commit devem seguir uma estrutura padronizada para melhorar a semântica do histórico do repositório.
> Com mensagens mais claras e fáceis de reconhecer é mais rápido encontrar mudanças que possam ter afetado o funcionamento da aplicação.

Abaixo podemos ver a estrutura de uma mensagem de commit no modelo que estabelecemos aqui:

```
tipo(escopo): descrição
```

❗ **tipo** = O tipo é como um rótulo para o tipo de alteração feita naquele commit.
Os tipos são padronizados e são mostrados na seção de `Tipos padrões`.

❗ **escopo (opcional)** = Um complemento a informação de tipo.
Especifica ainda mais a informação do tipo. Cada tipo pode múltiplos "escopos" pré-definidos.

Outros escopos podem ser definidos por cada time, porém cada escopo deve consistir de apenas uma palavra.

❗ **descrição** = Uma descrição de commit indica que alterações foram feitas.
Idealmente as descrições devem ser curtas e diretas. Se você commitar suas alterações com frequência será mais fácil pensar em descrições diretas.
A descrição deve ser escrita no tempo verbal que representa o presente.

❗ **! (opcional)** = Quebra de compatibilidade.
Para indicar uma mudança que quebra a compatibilidade do programa atual com a versão anterior devemos usar uma exclamação antes dos dois pontos.

Quebras de compatibilidade podem ser causadas por mudanças nas APIs, interfaces, versões de dependências, entre outros.

**COMMITS COM ESTE SÍMBOLO CORRESPONDEM A MUDANÇAS MAJOR (x.0.0) QUANDO PENSAMOS EM VERSIONAMENTO SEMÂNTICO**

**Exemplos de mensagens de commit:**

```bash
git commit -m "feat!: são interpretados apenas arquivos com extensão oml"
```

```bash
git commit -m "fix(typo): adiciona pontuação correta"
```

```bash
git commit -m "feat: adiciona função que encontra palavras duplicadas"
```

```bash
git commit -m "refactor: guarda números mágicos em constantes nomeadas"
```

```bash
git commit -m "docs(dev): instruções de como criar novas rotas"
```

```bash
git commit -m "format: adiciona linha em branco ao fim do arquivo"
```

## 🌳 Recomendações:

- **Procure commitar suas alterações de forma frequente.**

_Evite acumular muitas alterações pois isso pode levar a confusão e dificuldade no momento de decidir o tipo, o escopo e até a mensagem do commit._

- **Commits não devem ser feitos de X em X horas, mas sim de X em X alterações.**

_Você não vai commitar uma vez ao dia, mas sim toda vez que fizer uma mudança significativa em seu código. Essa mudança não se torna significativa por ter muitas linhas de código, mas sim por ter uma função específica na aplicação._

Ex:

```bash
git commit -m "format: aplicando formatações do prettier"
```

- **Quando commitar, procure sempre selecionar as alterações com o menor número de dependências (`uso de código externo ao daquele arquivo`) possíveis.**

## 🐸 Tipos padrões:

### **feat**

Use esse **tipo** para indicar que está adicionando uma nova funcionalidade. Pode ser uma outra rota, um novo componente ou até mesmo um novo jeito de usar um filtro, por exemplo.

**Corresponde a uma _minor version (0.x.0)_ no versionamento semântico.**

> Exemplos de uso:

```bash
git commit -m "feat: opções de visualização de gráficos"
```

### **fix**

Você deve usar o **tipo** `fix` quando for corrigir algum bug ou erro no código.

**Corresponde a uma _patch version_ (0.0.x) no versionamento semântico.**

#### Escopos:

- Quando a correção se tratar de um erro de ortografia use o escopo `(typo)`
- Quando a correção se tratar de um erro de cálculo matemático use o escopo `(math)`
- Quando a correção se tratar de um erro de interface do usuário (como uma cor usada incorretamente) use o escopo `(ui)`

> Exemplos de uso:

```bash
git commit -m "fix: corrige problema com cors"
```

```bash
git commit -m "fix(typo): troca vossê por você em todo o código"
```

```bash
git commit -m "fix(math): remove taxa de juros incorreta"
```

```bash
git commit -m "fix(ui): corrige imagens esticadas"
```

### **format**

Trata de mudanças no estilo do código e não do estilo da aplicação.
Formatar código, remover espaços em branco, adicionar ou remover linhas em branco, etc.

#### Escopos:

- Quando a for feita automaticamente use o escopo `(auto)`

> Exemplos de uso:

```bash
git commit -m "format: remove linhas em branco"
```

```bash
git commit -m "format: endenta arquivos python com quatro espaços"
```

```bash
git commit -m "format(auto): formata css com prettier"
```

```bash
git commit -m "format(auto): formata componente com eslint"
```

### **refactor**

Uma mudança de código que nem adiciona uma funcionalidade e nem arruma um bug. Pode ser utilizado quando trocamos os nomes das variáveis de um método para algo mais semântico, por exemplo.

> Exemplos de uso:

```bash
git commit -m "refactor: melhora nos nomes de variáveis e funções"
```

```bash
git commit -m "refactor: remove prefixo user das propriedades da classe User"
```

```bash
git commit -m "refactor: troca variáveis resumidas por palavras completas"
```

### **docs**

Você deve usar esse **tipo** quando adicionar algo nas documentações da sua aplicação.

#### Escopos:

- Use o escopo `(dev)` quando a adição for na documentação de desenvolvimento.
- Use o escopo `(user)` quando a adição for na documentação de usuários.
- Use o escopo `(code)` quando a adição for na documentação de código feita com comentários dentro do código.

> Exemplos de uso:

```bash
git commit -m "docs(dev): instruções para conexão com a API"
```

```bash
git commit -m "docs(user): como usar os filtros de data"
```

```bash
git commit -m "docs(code): uso da tipagem no stateType"
```

### **build**

Use esse **tipo** para indicar que sua mudança altera o processo de build.

Isso pode acontecer quando você muda uma configuração do vite, typescript, npm ou scripts de deploy por exemplo.

> Exemplos de uso:

```bash
git commit -m "build: altera o caminho base do vite"
```

### **deps**

Use esse **tipo** para indicar que sua mudança altera ou adiciona uma dependência.

#### Escopos:

- Quando a dependência estiver relacionada ao npm use o escopo `(npm)`
- Quando a dependência estiver relacionada ao composer use o escopo `(composer)`
- Quando a dependência estiver relacionada ao pecl use o escopo `(pecl)`
- Quando a dependência estiver relacionada a um cdn use o escopo `(cdn)`

> Exemplos de uso:

```bash
git commit -m "deps(npm): atualiza o react para a versão 18"
```

```bash
git commit -m "deps(composer): adiciona o pest para testes"
```

```bash
git commit -m "deps(pecl): remove swoole"
```

```bash
git commit -m "deps: adiciona arquivos ttf para fontes"
```

### **perf**

Usado em casos onde a mudança tem como objetivo melhorar a performance da aplicação.

Melhoras de performance podem estar presentes em melhorias de queries do banco de dados, redução de loops aninhados, melhoras em operações custosas, entre outros.

> Exemplos de uso:

```bash
git commit -m "perf: redução da quantidade de requests feitas a cada minuto"
```

### **revert**

Você deve usar esse \***\*tipo\*\*** quando for voltar na linha do tempo do repositório.

> Exemplos de uso:

```bash
git commit -m "revert: volta "
```

### **remove**

Use esse **tipo** para indicar que você removeu um arquivo do projeto.

Se o arquivo causava um bug no sistema é recomendado que use `fix` ao invés de `remove`.

> Exemplos de uso:

```bash
git commit -m "remove: deleta gitkeep"
```
