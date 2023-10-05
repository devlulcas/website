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

type GithubProjectNode = GithubProjectsResponse['data']['viewer']['repositories']['edges'][0]['node'];

async function getProjectImage(project: GithubProjectNode): Promise<string> {
	const getImageUrl = async () => {
		const exts = ['png', 'webp', 'jpg', 'jpeg', 'gif'];

		for (const ext of exts) {
			let githubImage = `https://raw.githubusercontent.com/devlulcas/${project.name}/main/.github/images/preview.${ext}`;

			const pingImageResponse = await fetch(githubImage, {
				method: 'HEAD'
			})

			if (pingImageResponse.ok) {
				return githubImage;
			}
		}

		return null;
	}

	const githubImage = await getImageUrl();

	return  githubImage ?? "/images/no-image-project.webp"
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

	const projectImages = await Promise.all(
		json.data.viewer.repositories.edges.map((edge) => getProjectImage(edge.node))
	);

	return json.data.viewer.repositories.edges.map((edge, index) => ({
		name: edge.node.name,
		description: edge.node.description ?? '',
		code: edge.node.url,
		url: edge.node.homepageUrl,
		createdAt: edge.node.createdAt,
		languages: edge.node.languages?.nodes ?? [],
		image: projectImages[index]
	}));
}
