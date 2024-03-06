import { GITHUB_API_KEY, HOW_MANY_PROJECTS_TO_SHOW } from '$env/static/private';
import { HIDE_LIST } from '../data/hide-list';
import type { Project } from '../types';

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

/**
 * Fetches all the projects metadata. Currently it only fetches the projects from Github
 */
export async function getProjects(): Promise<Project[]> {
  const projectsToShow = Number(HOW_MANY_PROJECTS_TO_SHOW) || 6;

  const extraProjects = HIDE_LIST.length;

  const QUERY_GH_PROJECTS = `
	{
		viewer {
			repositories(
				first: ${projectsToShow + extraProjects}
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

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { Authorization: `bearer ${GITHUB_API_KEY}` },
      body: JSON.stringify({ query: QUERY_GH_PROJECTS }),
    });

    const json = await response.json();

    const isGithubProjectsResponse = (response: unknown): response is GithubProjectsResponse => {
      return response !== null && typeof response === 'object' && 'data' in response;
    };

    if (!isGithubProjectsResponse(json)) {
      throw new Error('Invalid response from Github API');
    }

    const validRepositories = json.data.viewer.repositories.edges.filter(
      (edge) => HIDE_LIST.indexOf(edge.node.name) === -1,
    );

    const clippedRepositories = validRepositories.slice(0, projectsToShow);

    const projectImages = await Promise.all(clippedRepositories.map((edge) => getProjectImage(edge.node)));

    return clippedRepositories.map((edge, index) => ({
      name: edge.node.name,
      description: edge.node.description ?? '',
      code: edge.node.url,
      url: edge.node.homepageUrl,
      createdAt: edge.node.createdAt,
      languages: edge.node.languages?.nodes ?? [],
      image: projectImages[index],
    }));
  } catch (error) {
    console.error('Failed to fetch projects', error);
    return [];
  }
}

async function getProjectImage(project: GithubProjectNode): Promise<string> {
  const getImageUrl = async () => {
    const githubImages = ['png', 'webp', 'jpg', 'jpeg', 'gif'].map(
      (ext) => `https://raw.githubusercontent.com/devlulcas/${project.name}/main/.github/images/preview.${ext}`,
    );

    const ogs = ['og.png', 'og.webp'].map((src) => (project.homepageUrl ? `${project.homepageUrl}/${src}` : null));

    const possibleImages = [...githubImages, ...ogs.filter(Boolean)] as string[];

    for (const img of possibleImages) {
      const projectImage = img;

      const pingImageResponse = await fetch(projectImage, {
        method: 'HEAD',
      });

      if (pingImageResponse.ok) {
        return projectImage;
      }
    }

    return null;
  };

  const githubImage = await getImageUrl();

  return githubImage ?? '/images/no-image-project.webp';
}
