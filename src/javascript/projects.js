class Project {
	constructor(name, description, thumb, thumbDescription, liveUrl, codeUrl, moreInfoUrl, techs) {
		this.name = name;
		this.description = description;
		this.previewImage = {
			src: thumb,
			description: thumbDescription
		};
		this.urls = {
			liveUrl: liveUrl,
			codeUrl: codeUrl,
			moreInfoUrl: moreInfoUrl
		};
		this.techs = techs;
	}
}

// Instâncias de objetos de projeto (HORRENDA FORMA DE FAZER ISSO, MAS É O QUE TEMOS PARA HOJE)
const portfolio = new Project(
	'Portfólio',
	'My personal website',
	'/images/heroImage.jpg',
	'prints of my portfolio',
	'https://devlulcas.github.io',
	'https://github.com/devlulcas/devlulcas.github.io',
	'/notonline',
	['HTML', 'CSS', 'JS', 'SVELTE', 'SVELTEKIT', 'GHPAGES']
);

// Lista dos objetos de projeto
export const projects = [
	portfolio,
	portfolio,
	portfolio,
	portfolio,
	portfolio,
	portfolio,
].slice(0, 6);
