class Project {
	constructor(name, description, thumb, thumbDescription, liveUrl, codeUrl, moreInfoUrl, techs) {
		this.name = name;
		this.description = description;
		this.previewImage = {
			src: "/images/screenshots/" + thumb,
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
const placeholder = new Project(
	'Placeholder',
	'A place for a future project',
	'placeholder.jpg',
	'nothing here yet',
	'/notonline',
	'https://github.com/devlulcas/',
	'/notonline',
	['NOTHING', 'NOTHING', 'NOTHING', 'NOTHING', 'NOTHING']
);

const portfolio = new Project(
	'Portfólio',
	'My personal website',
	'portfolio.png',
	'prints of my portfolio',
	'https://devlulcas.github.io',
	'https://github.com/devlulcas/devlulcas.github.io',
	'/notonline',
	['HTML', 'CSS', 'JS', 'SVELTE', 'SVELTEKIT', 'GHPAGES']
);

const badgeGenerator = new Project(
	'Badge generator',
	'Badges for your readme',
	'/badgegenerator_screenshot.png',
	'prints of badge generator',
	'https://devlulcas.github.io/badge-generator/',
	'https://github.com/devlulcas/badge-generator',
	'/notonline',
	['HTML', 'CSS', 'JS']
);

const mySecretDiary = new Project(
	'My Secret Diary',
	'An online social media and diary',
	'/mysecretdiary_screenshot.png',
	'my secret diary homepage',
	'/notonline',
	'https://github.com/devlulcas/diary-front',
	'/notonline',
	['HTML', 'CSS', 'JS', 'SVELTE', 'NODE', 'KNEX', 'POSTGRES']
);

const myPersonalStartpage = new Project(
	'Personal startpage',
	'Custom browser startpage',
	'/startpage_screenshot.png',
	'my personal startpage  with a todo, weather and notes app',
	'https://devlulcas.github.io/personal-startpage/',
	'https://github.com/devlulcas/personal-startpage',
	'/notonline',
	['HTML', 'CSS', 'JS', 'WEATHER BIT API']
);

// Lista dos objetos de projeto
export const projects = [
	portfolio,
	badgeGenerator,
	mySecretDiary,
	myPersonalStartpage,
	placeholder,
	placeholder
].slice(0, 6);
