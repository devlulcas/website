import { GITHUB_API_KEY, HOW_MANY_PROJECTS_TO_SHOW } from '$env/static/private';

type GithubProjectsResponse = {
	data: {
		viewer: {
			repositories: {
				edges: {
					node: {
						name: string;
						url: string;
						description?: string;
						homepageUrl?: string;
						createdAt: string;
						languages?: {
							nodes: {
								name: string;
							}[];
						};
					};
				}[];
			};
		};
	};
};

type GithubProjectNode =
	GithubProjectsResponse['data']['viewer']['repositories']['edges'][0]['node'];

/**
 * Returns an array of images to be used in the project orderer by priority
 *
 * @param project Project node from Github API
 * @returns Array of images to be used in the project orderer by priority
 */
function getProjectImage(project: GithubProjectNode): string {
	const githubImage = `https://raw.githubusercontent.com/devlulcas/${project.name}/main/.github/images/preview.webp`;

	const openGraphImage = `${project.homepageUrl}/images/og.png`;

	return project.homepageUrl ? openGraphImage : githubImage;
}

export type Project = {
	name: string;
	description: string;
	code: string;
	url?: string;
	createdAt: string;
	languages?: { name: string }[];
	image: string;
};

/**
 * Fetches all the projects metadata. Currently it only fetches the projects from Github
 */
export async function fetchProjects(): Promise<Project[]> {
	const QUERY_GH_PROJECTS = `
	{
		viewer {
			repositories(
				first: ${HOW_MANY_PROJECTS_TO_SHOW ?? 6}
				orderBy: {field: STARGAZERS, direction: DESC}
				privacy: PUBLIC
				affiliations: OWNER
			) {
				edges {
					node {
						name
						url
						description
						homepageUrl
						createdAt
						languages(first: 6) {
							nodes {
								name
							}
						}
					}
				}
			}
		}
	}
  `;

	const response = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: { Authorization: `bearer ${GITHUB_API_KEY}` },
		body: JSON.stringify({ query: QUERY_GH_PROJECTS })
	});

	const json = await response.json();

	const isGithubProjectsResponse = (response: any): response is GithubProjectsResponse => {
		return Array.isArray(response?.data?.viewer?.repositories?.edges);
	};

	if (!isGithubProjectsResponse(json)) {
		throw new Error('Invalid response from Github API');
	}

	return json.data.viewer.repositories.edges.map((edge) => ({
		name: edge.node.name,
		description: edge.node.description ?? '',
		code: edge.node.url,
		url: edge.node.homepageUrl,
		createdAt: edge.node.createdAt,
		languages: edge.node.languages?.nodes ?? [],
		image: getProjectImage(edge.node)
	}));
}
