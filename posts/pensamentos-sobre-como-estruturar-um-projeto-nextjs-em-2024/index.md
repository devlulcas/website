---
title: Pensamentos sobre como estruturar um projeto NextJS em 2024
tags:
  - dev
  - typescript
  - react
  - nextjs
categories:
  - typescript
date: 02/27/2024
draft: true
excerpt: Anotações sobre separação de responsabilidades, estrutura de pastas e arquivos, boas práticas em projetos NextJS e até onde isso afeta o vasco
---

Quando eu comecei a estudar desenvolvimento eu não ligava muito sobre como organizar arquivos ou separar responsabilidades porque o que realmente importava era fazer as coisas funcionarem. Hoje eu percebo a importância de se ter um projeto estruturado de forma **PREVISÍVEL**.

Olha, eu escrevo essas coisas sem muita esperança de que alguém vá ler, mas se você é uma dessas pessoas que lê o que eu escrevo e é um iniciante, eu te digo: **não se preocupe muito com isso agora**. Aprenda a fazer as coisas funcionarem primeiro, depois você se preocupa com como organizar as coisas.

Inclusive, falando em experiência, minhas opiniões sobre o tema não são escritas em pedra (são em markdown hehe) e podem mudar se eu perceber que estava equivocado. A forma de organizar as coisas também pode ser afetada por mudanças no ecossistema de desenvolvimento, como novas ferramentas, novas práticas, novas tecnologias ou simplesmente porque as pessoas do time estão acostumadas a fazer as coisas de um jeito diferente.

Bom, dito isso vamos lá: **como estruturar um projeto NextJS em 2024?**

## Módulos

Eu gosto de quebrar o projeto em módulos onde cada módulo é como um "mini-projeto" dentro do projeto. Cada módulo tem suas próprias pastas e arquivos e é responsável por uma parte do projeto. Isso é bom porque facilita a manutenção e a escalabilidade do projeto.

Esse jeito de organizar não é fui eu quem inventei, só pra deixar claro, é bem popular e você vai encontrar vários vídeos e postagens que falam sobre isso. Essa abordagem surge de maneira bem natural quando o projeto começa a crescer um pouco. Algumas coisas simplesmente parecem que devem estar juntas.

Sobre o que eu estou falando afinal? Bom, se você está construindo um website de e-commerce, por exemplo, você pode separar sua aplicação em módulos como "carrinho", "produto", "usuário", "pedido", "pagamento", etc. Cada módulo é responsável por uma parte do website e tem suas próprias pastas e arquivos.

## Estrutura de pastas e arquivos

Esse assunto é meio problematico porque é muito fácil você errar a mão e tornar a estrutura do projeto muito complexa ou fragmentar uma funcionalidade que poderia ser escrita em um só lugar com 20 linhas de código em 5 arquivos diferentes onde as vezes a única coisa que um arquivo faz é ter uma função que chama outra função.

Dito isso, fique atento e se pergunte se você realmente precisa complicar as coisas. Se você está começando um projeto novo, comece simples e vá complicando as coisas conforme a necessidade.

No Next 13+, com o `app directory` é possível colocar seus componentes ao lado do arquivo que é a página daquela rota. As vezes isso já é bom o bastante, agiliza o desenvolvimento de páginas simples e ainda mantém as coisas organizadas.

```plaintext
├── src
│   ├── app                                 (pasta onde ficam as rotas no next - coisa do next)
│   |   ├── page.tsx                        (arquivo que é a página da rota - coisa do next)
│   |   ├── layout.tsx                      (arquivo que é o layout da rota - coisa do next)
│   |   ├── header.tsx                      (um component de header - coisa nossa)
│   |   ├── footer.tsx                      (um component de footer - coisa nossa)
│   |   ├── auth-call-to-action.tsx         (um component de call to action para autenticação - coisa nossa)
│   |   ├── interactive-hero-section.tsx    (um component de hero section interativo - coisa nossa)
│   |   ├── about                           (pasta de uma rota chamada about - coisa do next)
│   │   |   ├── page.tsx                    (arquivo que é a página da rota - coisa do next)
│   │   |   ├── picture-carousel.tsx        (um component de carousel de imagens - coisa nossa)
│   │   |   ├── presentation-video.tsx      (um component de video de apresentação - coisa nossa)
```

No entanto, lembre-se de uma coisa: PREVISIBILIDADE. Não me importo tanto com o padrão que está sendo seguido desde que tenha um padrão e ele seja minimanente previsível. Não quero ter que ficar procurando arquivos e pastas por todo o projeto. Quero pensar "ah, tenho que fazer uma alteração no componente X, então eu vou na pasta Y e abro o arquivo Z" e pronto. Independente de como você organizar as coisas no projeto, siga esse princípio ou se for alterar o padrão, mantenha a previsibilidade alterando aos poucos os arquivos que já existem.

É comum nos projetos em que eu trabalho termos uma estrutura de pastas e arquivos parecida com essa (ignorando arquivos de configuração e coisas assim):

```plaintext
├── src
│   ├── app
│   |   ├── page.tsx
│   |   ├── layout.tsx
│   |   ├── about
│   │   |   ├── page.tsx
|   |
│   ├── modules
│   |   ├── <nome-do-módulo>
│   │   |   ├── components   (onde vão os components react)
│   │   |   ├── constants    (onde vão as constantes)
│   │   |   ├── hooks        (onde vão os hooks)
│   │   |   ├── services     (onde vão as funções com alguma lógica de negócio e na maior parte das vezes chamam a API)
│   │   |   ├── types        (onde vão os tipos)
│   │   |   ├── lib          (onde vão funções que são usadas em mais de um lugar)
|   |
│   ├── shared               (mesma coisa que um módulo especifico, só que com coisas que todo mundo usa)
│   │   ├── components       (onde vão os components react)
│   │   |   ├── ui           (onde vão os components bem genéricos, como botões, inputs, etc)
│   │   |   ├── common       (onde vão os components usados em todo canto, como uma tela de carregamento, por exemplo)
│   │   ├── constants        (onde vão as constantes)
│   │   |   ├── env          (onde vão as variáveis de ambiente)
│   │   ├── hooks            (onde vão os hooks)
│   │   ├── types            (onde vão os tipos)
│   │   ├── lib              (onde vão funções que são usadas em mais de um lugar)
```

Se o projeto for mais "fullstack" e eu tiver que interagir mais com um banco de dados e não só consumir dados de uma API, eu geralmente adiciono uma pasta `repositories` dentro de cada módulo. Essa pasta é onde vão as funções que interagem com as fontes de dados, como um banco de dados ou uma API.

```plaintext
├── src
│   ├── modules
│   |   ├── <nome-do-módulo>
│   │   |   ├── repositories  (onde vão as funções que interagem com as fontes de dados)
│   │   |   ├── services      (onde vão as funções com alguma lógica de negócio e nesse caso geralmente chamam os repositórios)
```

Enfim, eu gosto de separar as coisas mais ou menos assim: `busca de dados > gerenciamento de estado > componentes > páginas`. Isso é uma simplificação, mas é mais ou menos isso.
