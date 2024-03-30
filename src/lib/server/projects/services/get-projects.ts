import { GITHUB_API_KEY, HOW_MANY_PROJECTS_TO_SHOW } from '$env/static/private';
import { HIDE_LIST } from '../data/hide-list';
import type { Project } from '../types';
import { getProjectImage } from './get-project-image';

type GithubProjectsResponse = {
  data: {
    search: {
      repositories: Array<{
        repository: {
          name: string;
          url: string;
          description: string | null;
          homepageUrl: string | null;
          createdAt: string;
          languages: {
            nodes: Array<{
              name: string;
            }>;
          };
        };
      }>;
    };
  };
};

/**
 * Fetches all the projects metadata. Currently it only fetches the projects from Github
 */
export async function getProjects(): Promise<Project[]> {
  const projectsToShow = Number(HOW_MANY_PROJECTS_TO_SHOW) || 6;

  const QUERY_GH_PROJECTS = `  
  query GetProjects {
    search(type: REPOSITORY, query: """
      in:name NOT demo
      is:public user:devlulcas 
      """, first: ${projectsToShow + HIDE_LIST.length}) {
      repositories: edges {
        repository: node {
          ... on Repository {
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

    const repositories = json.data.search.repositories;

    const filteredRepositories = repositories
      .filter((edge) => !HIDE_LIST.includes(edge.repository.name))
      .slice(0, projectsToShow);

    const projectImages = await Promise.all(filteredRepositories.map((edge) => getProjectImage(edge.repository)));

    return filteredRepositories.map((edge, index) => ({
      name: edge.repository.name,
      description: edge.repository.description ?? '',
      code: edge.repository.url,
      url: edge.repository.homepageUrl ?? '/',
      createdAt: edge.repository.createdAt,
      languages: edge.repository.languages?.nodes ?? [],
      image: projectImages[index],
    }));
  } catch (error) {
    console.error('Failed to fetch projects', error);
    return [];
  }
}
