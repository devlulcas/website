---
title: SWR React
tags:
  - dev
  - typescript
  - react
  - state management
categories:
  - typescript
date: 01/09/2025
draft: false
excerpt: Gerenciando estado de requisições com mais facilidade.
---

# SWR

![swr](./swr.png)

Stale While Re-validate é uma técnica para invalidação de cache HTTP que vem de uma RFC para o protocolo.

Primeiro você retorna os dados do cache, depois faz uma nova solicitação de recurso e aí troca os dados velhos pelos novos.

No React, [SWR](https://swr.vercel.app/pt-BR) é uma lib que faz uso dessa dinâmica para te ajudar a cuidar do gerenciamento de estado na sua aplicação, especialmente dessa parte que eu chamo de _estado do servidor_.

Estado do servidor geralmente se refere ao estado de requisições feitas com função fetch ou web sockets (HTTP, graphql, web sockets, etc). Frequentemente age como um gerenciador de estado global, mas é diferente de algo como um Jotai.

```tsx
import useSWR from 'swr';

function Profile() {
	const { data, error, isLoading } = useSWR('/api/user', fetcher);

	if (error) return <div>falhou em carregar</div>;
	if (isLoading) return <div>carregando...</div>;
	return <div>Olá {data.name}!</div>;
}
```

Nesse exemplo acima vemos o SWR sendo usado para fazer uma requisição get para um endpoint `api/user`. Nem sempre esse primeiro parâmetro é um endpoint, na verdade seu nome é `key`, é uma chave para o cache. O outro parâmetro é uma função assíncrona que retorna o dado desejado, você pode usar o fetch da API do navegador ou implementar o seu para trocar a URL base ou fazer algum outro tratamento.

> Uma coisa massa dessa lib é que ela é super leve e compatível com React Native, eu pessoalmente prefiro usar a [Tanstack Query](https://tanstack.com/query/latest/docs/framework/react/quick-start) para gerenciar qualquer estado assíncrono, mas entendo que a `useSWR` tem seu lugar para algumas pessoas.

Essa função `fetcher` aceita pelo `useSWR` é apenas um envólucro ao redor do fetch nativo e tem a mesma assinatura.

```ts
fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
```

Eu acredito que a melhor forma de usar o swr seja semelhante com a melhor forma de usar o tanstack, criando um custom hook e passando os parâmetros lá. Geralmente eu nomeio os hooks de acordo com sua função:

- O hook busca os dados de um usuário - `GET /user/:id` - É uma _query_ - `useUserByIdQuery`
- O hook altera os dados do usuário atual - `PATCH /user/current-profile` - É uma _mutation_ - `useUpdateCurrentProfileMutation`, `usePatchCurrentProfileMutation` ou `usePatchProfileMutation`

Isso ajuda a identificar as coisas, mas não é regra... mas faz isso aí fazendo um favor.

> Ah mas porque eu vou adicionar uma biblioteca para fazer requests se eu posso só usar um `useState` + `useEffect`

Criatura, você pode evitar umas dores de cabeça e deixar o código mais enxuto. Uma implementação boa de algo do tipo vai te levar a sua própria lib com gerenciamento do cache, dos estados da requisição, dos mecanismos para evitar condições de corrida (sim no React a gente consegue fazer o impossível).

> Se eu usar o hook `useUserByIdQuery` mais de uma vez o request vai ser feito várias vezes?

Não necessariamente! Só se a chave no `useSWR` mudar, de resto, o dado retornado vai ser o cacheado. Os dados serão recarregados em casos onde a conexão muda de estado ou o usuário troca de aba.

> E se eu quiser alterar as condições de atualização do cache?

O hook aceita um terceiro parâmetro com opções o que inclui um intervalo de atualização dos dados e várias outras coisas como a possibilidade de fazer o uso do React Suspense.

> E como eu faço para fazer requisições POST ou outras que alteram dados no backend?

Essas são as mutações (`mutations`) que eu comentei na forma de nomear um hook que faz esse tipo de coisa.
No SWR a função `useSWR` retorna um objeto que geralmente nós desestruturamos para pegar dados específicos como `error` ou `loading`. Nesse mesmo objeto podemos pegar uma função `mutate` responsável por alterar aquele estado e o cache relacionado com aquela chave.

```tsx
import useSWR from 'swr';

function Profile() {
	const { data, mutate } = useSWR('/api/user', fetcher);

	return (
		<div>
			<h1>Meu nome é {data.name}.</h1>
			<button
				onClick={async () => {
					const newName = data.name.toUpperCase();
					// envia um request para a API para atualizar os dados
					await requestUpdateUsername(newName);
					// atualiza os dados locais imediatamente e revalida (refetch)
					// NOTA: `key` não é necessário quando estiver usando o mutate pré-vinculado do useSWR
					mutate({ ...data, name: newName });
				}}
			>
				Deixe meu nome em caixa alta!
			</button>
		</div>
	);
}
```

O problema dessa forma de fazer as coisas é que não temos os estados de carregamento da ação, por exemplo. É uma experiência pobre comparada ao tanstack.

Você também pode usar o `mutate` de forma global importando uma função com esse nome diretamente ou pelo hook `useSWRConfig`. Nesse caso você deve indicar a chave para invalidar.

```tsx
import useSWR, { useSWRConfig } from 'swr';

function App() {
	const { mutate } = useSWRConfig();

	return (
		<div>
			<Profile />
			<button
				onClick={() => {
					// define o cookie como expirado
					document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

					// avisa todos os SWR com essa chave para revalidar
					mutate('/api/user');
				}}
			>
				Logout
			</button>
		</div>
	);
}
```

> Sim, eu puxei isso direto da documentação!

Uma forma mais legal de fazer isso é com o hook `useSWRMutation` que retorna um gatilho e o estado da mutação também!

```tsx
import useSWRMutation from 'swr/mutation';

async function sendRequest(url, { arg }: { arg: { username: string } }) {
	return fetch(url, {
		method: 'POST',
		body: JSON.stringify(arg)
	}).then((res) => res.json());
}

function App() {
	const { trigger, isMutating } = useSWRMutation('/api/user', sendRequest /* opções */);

	return (
		<button
			disabled={isMutating}
			onClick={async () => {
				try {
					const result = await trigger({ username: 'johndoe' } /* opções */);
				} catch (e) {
					// lidando com erros
				}
			}}
		>
			Criar Usuário
		</button>
	);
}
```

Você também pode fazer mutações baseadas nos dados que já tem em cache

```tsx
mutate(
	'/api/todos',
	async (todos) => {
		// vamos atualizar o todo com ID `1` para ser concluído,
		// esta API retorna os dados atualizados
		const updatedTodo = await fetch('/api/todos/1', {
			method: 'PATCH',
			body: JSON.stringify({ completed: true })
		});

		// filtra a lista e retorna com os dados atualizados
		const filteredTodos = todos.filter((todo) => todo.id !== '1');
		return [...filteredTodos, updatedTodo];
		// Como a API já nos fornece as informações atualizadas,
		// não precisamos revalidar aqui.
	},
	{ revalidate: false }
);
```

De volta as `queries`: Caso esteja construindo uma UI com rolagem infinita você pode usar o hook `useSWRInfinite` que facilita este tipo de coisa. Não use isso para paginação comum ou casos simples de rolagem infinita, [a documentação tem vários exemplos](https://swr.vercel.app/pt-BR/docs/pagination) onde você pode usar o hook normal e fazer uns pequenos ajustes apenas.

Como os casos de uso do carregamento infinito são mais específicas eu deixo para quem quiser ir ler a documentação ou precisar fazer isso.

Outras paradas úteis que tem nas docs: middleware, suspense, SSG e SSR com NextJS, pre-fetching e etc.
