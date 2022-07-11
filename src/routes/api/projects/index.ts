import type { ResponseBody } from "@sveltejs/kit";
import { GraphqlClient } from "$/graphql";

export async function get(): Promise<ResponseBody> {
  const url = process.env.GITHUB_GRAPHQL_ENDPOINT;
  const key = process.env.GITHUB_API_KEY;

  const client = new GraphqlClient(url, `bearer ${key}`);

  const query = `
	{
		viewer {
	  		repositories(
					first: 30
					orderBy: {field: CREATED_AT, direction: DESC}
					privacy: PUBLIC
	  		) {
				edges {
		  			node {
						name
						url
						description
						homepageUrl
						createdAt
						languages(first: 10) {
							nodes {
								name
							}
						}
					}
				}
			}
		}
	}`;

  const json = await client.runQuery(query);

  return {
    headers: "ContentType: application/json",
    status: 202,
    body: json,
  };
}
