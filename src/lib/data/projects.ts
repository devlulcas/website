import { GITHUB_TOKEN } from '$env/static/private';
import type { ProjectResponse } from './types';

const key = GITHUB_TOKEN;

const headers = {
	Authorization: `bearer ${key}`,
	'Content-Type': 'application/json',
	Accept: 'application/json'
};

const url = 'https://api.github.com/graphql';

function formatISOToLocaleString(str: string, locale: 'en' | 'pt' = 'en') {
	const dateTimeFormat = new Intl.DateTimeFormat(locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	const date = new Date(str);

	return dateTimeFormat.format(date);
}

/**
 * Get pinned projects from github
 * @returns Pinned projects from github
 */
export const fetchPinnedProjects = async () => {
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

	const queryString = JSON.stringify({ query: queryPinnedProjects });

	const response = await fetch(url, {
		method: 'POST',
		headers: headers,
		body: queryString
	});

	const { data } = await response.json();

	const result = data as ProjectResponse<'pinnedItems'>;

	return result.viewer.pinnedItems.edges.map((edge) => ({
		...edge.node,
		createdAt: formatISOToLocaleString(edge.node.createdAt)
	}));
};

/**
 * Get all projects from github
 * @returns Projects from github
 */
export const fetchMoreProjects = async () => {
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

	const queryString = JSON.stringify({ query: queryAllProjects });

	const response = await fetch(url, {
		method: 'POST',
		headers: headers,
		body: queryString
	});

	const { data } = await response.json();

	const result = data as ProjectResponse<'repositories'>;

	return result.viewer.repositories.edges.map((edge) => ({
		...edge.node,
		createdAt: formatISOToLocaleString(edge.node.createdAt)
	}));
};
