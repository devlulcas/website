import { formatISOToLocaleString } from './helpers/formaters';
import { graphqlFetch } from './helpers/graphql';
import type { Project, ProjectResponse } from './types/types';

/**
 * Get pinned projects from github
 * @returns Pinned projects from github
 */
export async function fetchPinnedProjects(): Promise<Project[]> {
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
		const result = await graphqlFetch<ProjectResponse<'pinnedItems'>>(queryPinnedProjects);

		return result.viewer.pinnedItems.edges.map((edge) => ({
			picture: `https://raw.githubusercontent.com/devlulcas/${edge.node.name}/main/.github/images/preview.png`,
			description: edge.node.description || 'No description',
			homepageUrl: edge.node.homepageUrl || edge.node.url,
			languages: edge.node.languages.nodes.map((node) => node.name),
			name: edge.node.name,
			url: edge.node.url,
			createdAt: formatISOToLocaleString(edge.node.createdAt)
		}));
	} catch (error) {
		console.error(error);
		return [];
	}
}

/**
 * Get all projects from github
 * @returns Projects from github
 */
export async function fetchMoreProjects(): Promise<Project[]> {
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
		const result = await graphqlFetch<ProjectResponse<'repositories'>>(queryAllProjects);

		return result.viewer.repositories.edges.map((edge) => ({
			picture: `https://raw.githubusercontent.com/devlulcas/${edge.node.name}/main/.github/images/preview.png`,
			description: edge.node.description || 'No description',
			homepageUrl: edge.node.homepageUrl || edge.node.url,
			languages: edge.node.languages.nodes.map((node) => node.name),
			name: edge.node.name,
			url: edge.node.url,
			createdAt: formatISOToLocaleString(edge.node.createdAt)
		}));
	} catch (error) {
		console.error(error);
		return [];
	}
}
