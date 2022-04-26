import { Project } from "$models/entities/Project";

class ProjectRepository {
	// Fetch local API that gets Github data
	public static async getAllProjects() {
		const response = await fetch("http://localhost:3000/api/projects");

		const json = await response.json();

		const edges: any[] = json.data.viewer.repositories.edges;

		const filteredProjects = edges.filter(
			(repository) => !repository.node.name.startsWith("learning")
		);

		const projects = filteredProjects.map((repository) => this.createProjectObject(repository));

		return projects;
	}

	// Rearranges github response to deliver a single Project object
	private static createProjectObject(repository: any) {
		const node = repository.node;

		const imageUrl = `https://raw.githubusercontent.com/devlulcas/${node.name}/main/.github/images/preview.png`;

		let name = node.name as string;
		name = name.replace("-", " ");

		if (name.length >= 18) {
			name = name.slice(0, 14);
			name = name + "...";
		}

		const project = {
			name: name,
			description: node.description,
			codeUrl: node.url,
			url: node.homepageUrl,
			date: node.createdAt,
			tech: node.languages.nodes.map((lang) => lang.name),
			previewImage: {
				src: imageUrl,
				alt: name + " preview"
			}
		};

		return new Project(project);
	}
}

export { ProjectRepository };
