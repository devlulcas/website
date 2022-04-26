import { Project } from "$models/entities/Project";

class ProjectRepository {
	// Fetch local API that gets Github data
	public static async getAllProjects() {
		const base = window.location.origin;

		const response = await fetch(base + "/api/projects");

		const json = await response.json();

		const edges: any[] = json.data.viewer.repositories.edges;

		const filteredProjects = edges.filter(this.isValid);
		console.log(filteredProjects);

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

	private static isValid(project: any): boolean {
		const node = project.node;
		const name: string = node.name.toLowerCase();

		// Ignora repositórios de configuração e / ou projetos descontinuados
		const ignore = [
			"settings",
			"dotfiles",
			"configs",
			"firebird-php",
			"lrl-airlines",
			"solved-uri-algorithms",
			"numeric-colors",
			"rocketq",
			"nlw-heat"
		];

		// Ignora anotações
		if (name.startsWith("learning")) return false;
		if (name.startsWith("atividade")) return false;
		if (name.startsWith("school")) return false;

		// Ignora projetos vazios ou com apenas texto
		if (!node.languages.nodes.length) return false;

		if (ignore.includes(name)) return false;

		return true;
	}
}

export { ProjectRepository };
