class GraphqlClient {
	private url: string;
	private headers: HeadersInit;

	constructor(url: string, auth?: string) {
		this.url = url;

		this.headers = {
			Authorization: auth ?? "",
			"Content-Type": "application/json",
			Accept: "application/json"
		};
	}

	async runQuery(query: string, headers?: HeadersInit) {
		const finalHeaders = {
			...this.headers,
			...headers
		};

		const queryString = JSON.stringify({ query });

		const response = await fetch(this.url, {
			method: "post",
			headers: finalHeaders,
			body: queryString
		});

		return await response.json();
	}
}

export { GraphqlClient };
