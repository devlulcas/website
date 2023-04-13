import { GITHUB_TOKEN } from '$env/static/private';

export async function graphqlFetch<T>(query: string): Promise<T> {
	const key = GITHUB_TOKEN;

	const headers = {
		Authorization: `bearer ${key}`,
		'Content-Type': 'application/json',
		Accept: 'application/json'
	};

	const url = 'https://api.github.com/graphql';

	const queryString = JSON.stringify({ query: query });

	const response = await fetch(url, {
		method: 'POST',
		headers: headers,
		body: queryString
	});

	const json = await response.json();

	return json;
}
