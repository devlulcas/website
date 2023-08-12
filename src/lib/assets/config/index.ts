import docker from '$/lib/assets/images/skills/docker.svg';
import express from '$/lib/assets/images/skills/express.svg';
import figma from '$/lib/assets/images/skills/figma.svg';
import firebird from '$/lib/assets/images/skills/firebird.svg';
import git from '$/lib/assets/images/skills/git.svg';
import github from '$/lib/assets/images/skills/github.svg';
import go from '$/lib/assets/images/skills/go.svg';
import javascript from '$/lib/assets/images/skills/javascript.svg';
import nextjs from '$/lib/assets/images/skills/nextjs.svg';
import node from '$/lib/assets/images/skills/node.svg';
import php from '$/lib/assets/images/skills/php.svg';
import postgresql from '$/lib/assets/images/skills/postgresql.svg';
import react from '$/lib/assets/images/skills/react.svg';
import sass from '$/lib/assets/images/skills/sass.svg';
import svelte from '$/lib/assets/images/skills/svelte.svg';
import typescript from '$/lib/assets/images/skills/typescript.svg';

export const website = {
	title: 'Lucas Rego',
	author: 'Lucas Alves Rego - @devlulcas',
	description: 'I like to build things. Full-stack developer and curious about everything related to technology.',
	url: 'https://lucasrego.tech',
	image: 'https://lucasrego.tech/images/og-image.webp',
	lang: 'en',
	keywords: ['portfolio', 'blog', 'developer', 'web dev', 'svelte', 'react', 'css', 'typescript'],
	post: {
		cover: 'https://lucasrego.tech/images/og-image.webp'
	},
	social: {
		github: 'https://github.com/devlulcas',
		linkedIn: 'https://www.linkedin.com/in/lucasalvesrego/',
		twitter: 'https://twitter.com/devlulcas',
		email: 'lucasalvesrego.contato@gmail.com'
	}
};

export const availablePostCategories = [
	'css',
	'javascript',
	'typescript',
	'react',
	'svelte',
	'node',
	'web',
	'dev',
	'testing',
	'git',
	'github',
	'database',
	'api',
	'graphql',
	'next js',
	'sveltekit',
	'none',
	'4fun'
];

export type Skill = {
	name: string;
	image: string;
	url: string;
};

export const skills: Skill[] = [
	{
		name: 'React',
		image: react,
		url: 'https://react.dev/'
	},
	{
		name: 'Next.js',
		image: nextjs,
		url: 'https://nextjs.org/'
	},
	{
		name: 'TypeScript',
		image: typescript,
		url: 'https://www.typescriptlang.org/'
	},
	{
		name: 'Javascript',
		image: javascript,
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
	},
	{
		name: 'Svelte',
		image: svelte,
		url: 'https://svelte.dev/'
	},
	{
		name: 'Node.js',
		image: node,
		url: 'https://nodejs.org/'
	},
	{
		name: 'Express',
		image: express,
		url: 'https://expressjs.com/'
	},
	{
		name: 'Sass',
		image: sass,
		url: 'https://sass-lang.com/'
	},
	{
		name: 'Sveltekit',
		image: svelte,
		url: 'https://kit.svelte.dev/'
	},
	{
		name: 'Docker',
		image: docker,
		url: 'https://www.docker.com/'
	},
	{
		name: 'Git',
		image: git,
		url: 'https://www.git-scm.com/'
	},
	{
		name: 'Github',
		image: github,
		url: 'https://www.github.com/'
	},
	{
		name: 'PostgreSQL',
		image: postgresql,
		url: 'https://www.postgresql.org/'
	},
	{
		name: 'PHP',
		image: php,
		url: 'https://www.php.net/'
	},
	{
		name: 'FirebirdSQL',
		image: firebird,
		url: 'https://firebirdsql.org/'
	},
	{
		name: 'Go',
		image: go,
		url: 'https://golang.org/'
	},
	{
		name: 'Figma',
		image: figma,
		url: 'https://www.figma.com/'
	}
];
