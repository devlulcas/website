import type {
	PinnedProjectGraphQlReturn,
	ProjectGraphQlReturn
} from '$commonTypes/project-graphql-return';

import { GraphqlHelper } from '../graphql/helper';

const url = process.env.GITHUB_GRAPHQL_ENDPOINT ?? 'https://api.github.com/graphql';
const key = process.env.GITHUB_API_KEY;
const client = new GraphqlHelper(url, `bearer ${key}`);

export async function getPinnedProjects() {
	const queryPinnedProjects = `
	{
		viewer {
			pinnedItems(first: 4) {
				edges {
					node {
						... on Repository {
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
		}
	}`;

	try {
		const pinnedProjectsResult = await client.runQuery<PinnedProjectGraphQlReturn>(
			queryPinnedProjects
		);

		console.log(pinnedProjectsResult);

		const pinnedProjectsNodes = pinnedProjectsResult.data.viewer.pinnedItems.edges;

		const pinnedProjects = pinnedProjectsNodes.map(({ node }) => node);

		return pinnedProjects;
	} catch (error) {
		return [];
	}
}

export async function getAllProjects() {
	const queryAllProjects = `
	{
		viewer {
	  		repositories(
					first: 50
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

	try {
		const allProjectsResult = await client.runQuery<ProjectGraphQlReturn>(queryAllProjects);

		console.log(allProjectsResult);

		const allProjectNodes = allProjectsResult.data.viewer.repositories.edges;

		const allProjects = allProjectNodes.map(({ node }) => node);

		return allProjects;
	} catch (error) {
		return [];
	}
}
