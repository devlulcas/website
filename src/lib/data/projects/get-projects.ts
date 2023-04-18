import { githubGraphqlFetch } from './utils';
import type { Project, ProjectEdge } from './types';
import { fromProjectEdgeToProjectEntity } from './mappers';

export async function getProjects(): Promise<{ pinnedItems: Project[]; repositories: Project[] }> {
	try {
		const result = await githubGraphqlFetch<GithubProjectsResponse>(QUERY_GH_PROJECTS);

		console.log(result);

		return {
			pinnedItems: result.data.viewer.pinnedItems.edges.map(fromProjectEdgeToProjectEntity),
			repositories: result.data.viewer.repositories.edges.map(fromProjectEdgeToProjectEntity)
		};
	} catch (error) {
		console.error(error);

		return {
			pinnedItems: [],
			repositories: []
		};
	}
}

type GithubProjectsResponse = {
	data: {
		viewer: {
			pinnedItems: {
				edges: ProjectEdge[];
			};
			repositories: {
				edges: ProjectEdge[];
			};
		};
	};
};

const QUERY_GH_PROJECTS = `
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
}
`;
