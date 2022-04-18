class ProjectRepository {
	static async getAllProjects() {
		const queryString = `
        {
            user(login: "devlulcas") {
              repositories(last: 30) {
                edges {
                  node {
                    name
                    homepageUrl
                  }
                }
                edges {
                  node {
                    languages(first: 5) {
                      nodes {
                        color
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }`;

		const response = await fetch("www.placeholder.com/graphql", {
			method: "post",
			headers: {},
			body: queryString
		});

		const json = await response.json();

		return json;
	}
}

export { ProjectRepository };
