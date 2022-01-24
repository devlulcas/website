import { Project } from '../javascript/Project';

// Instâncias de objetos de projeto (HORRENDA FORMA DE FAZER ISSO, MAS É O QUE TEMOS PARA HOJE)
const placeholder = new Project();
const portfolio = new Project('Portfolio');
const badgeGenerator = new Project('Badge generator');
const mySecretDiary = new Project('My Secret Diary');
const myPersonalStartpage = new Project('Personal startpage');

portfolio
	.addDescription('My personal website')
	.addPreview('portfolio.png', 'prints of my portfolio')
	.addLiveUrl('https://devlulcas.github.io')
	.addCodeUrl('https://github.com/devlulcas/devlulcas.github.io')
	.addMoreInfoUrl('portfolio')
	.addTechs(['HTML', 'CSS', 'JS', 'SVELTE', 'SVELTEKIT', 'GHPAGES']);

badgeGenerator
	.addDescription('Badges for your readme')
	.addPreview('badgegenerator.png', 'prints of badge generator')
	.addLiveUrl('https://devlulcas.github.io/badge-generator/')
	.addCodeUrl('https://github.com/devlulcas/badge-generator')
	.addMoreInfoUrl('badge_generator')
	.addTechs(['HTML', 'CSS', 'JS']);

mySecretDiary
	.addDescription('An online social media and diary')
	.addPreview('mysecretdiary.png', 'my secret diary homepage')
	.addLiveUrl('https://devlulcas.github.io/badge-generator/')
	.addCodeUrl('https://github.com/devlulcas/diary-front')
	.addMoreInfoUrl('my_secret_diary')
	.addTechs(['HTML', 'CSS', 'JS', 'SVELTE', 'NODE', 'KNEX', 'POSTGRES']);

myPersonalStartpage
	.addDescription('Custom browser startpage')
	.addPreviewSource('startpage.png')
	.addPreviewDescription('my personal startpage  with a todo, weather and notes app')
	.addLiveUrl('https://devlulcas.github.io/personal-startpage/')
	.addCodeUrl('https://github.com/devlulcas/personal-startpage')
	.addMoreInfoUrl('personal_startpage')
	.addTechs(['HTML', 'CSS', 'JS', 'WEATHER BIT API']);

// Lista dos objetos de projeto
export const projects = [
	portfolio,
	badgeGenerator,
	mySecretDiary,
	myPersonalStartpage,
	placeholder,
	placeholder
].slice(0, 6);
