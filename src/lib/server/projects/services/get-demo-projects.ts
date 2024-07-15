import { GITHUB_API_KEY } from "$env/static/private";
import type { Project } from "../types";
import { getProjectImage } from "./get-project-image";

type GithubDemoProjectsResponse = {
  data: {
    search: {
      repositories: Array<{
        repository: {
          name: string;
          url: string;
          description: string;
          homepageUrl?: string;
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
 * Fetches all the demo projects metadata.
 */
export async function getDemoProjects(): Promise<Project[]> {
  const QUERY_GH_PROJECTS = `
    query GetDemoProjects {
      search(type: REPOSITORY, query: "in:name demo user:devlulcas", first: 10) {
        repositories: edges {
          repository: node {
            ... on Repository {
              name
              url
              description
              homepageUrl
              createdAt
              languages(first: 3) {
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
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: { Authorization: `bearer ${GITHUB_API_KEY}` },
      body: JSON.stringify({ query: QUERY_GH_PROJECTS }),
    });

    const json = await response.json();

    const isGithubProjectsResponse = (
      response: unknown,
    ): response is GithubDemoProjectsResponse => {
      return (
        response !== null && typeof response === "object" && "data" in response
      );
    };

    if (!isGithubProjectsResponse(json)) {
      throw new Error("Invalid response from Github API");
    }

    const repositories = json.data.search.repositories;

    const projectImages = await Promise.all(
      repositories.map((edge) => getProjectImage(edge.repository)),
    );

    return repositories.map((edge, index) => ({
      name: edge.repository.name,
      description: edge.repository.description ?? "",
      code: edge.repository.url,
      url: edge.repository.homepageUrl,
      createdAt: edge.repository.createdAt,
      languages: edge.repository.languages?.nodes ?? [],
      image: projectImages[index],
    }));
  } catch (error) {
    console.error("Failed to fetch projects", error);
    return [];
  }
}
