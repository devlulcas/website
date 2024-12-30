import docker from '$/lib/assets/images/skills/docker.svg';
import express from '$/lib/assets/images/skills/express.svg';
import figma from '$/lib/assets/images/skills/figma.svg';
import firebird from '$/lib/assets/images/skills/firebird.svg';
import go from '$/lib/assets/images/skills/go.svg';
import nextjs from '$/lib/assets/images/skills/nextjs.svg';
import node from '$/lib/assets/images/skills/node.svg';
import php from '$/lib/assets/images/skills/php.svg';
import postgresql from '$/lib/assets/images/skills/postgresql.svg';
import react from '$/lib/assets/images/skills/react.svg';
import sass from '$/lib/assets/images/skills/sass.svg';
import svelte from '$/lib/assets/images/skills/svelte.svg';
import typescript from '$/lib/assets/images/skills/typescript.svg';

//new
import css from '$/lib/assets/images/skills/css.svg';
import hono from '$/lib/assets/images/skills/hono.svg';
import nestjs from '$/lib/assets/images/skills/nestjs.svg';
import tailwind from '$/lib/assets/images/skills/tailwind.svg';
import vue from '$/lib/assets/images/skills/vue.svg';

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
		name: 'CSS',
		image: css,
		url: 'https://www.w3c.org/'
	},
	{
		name: 'Tailwind',
		image: tailwind,
		url: 'https://tailwindcss.com/'
	},
	{
		name: 'Vue',
		image: vue,
		url: 'https://vuejs.org/'
	},
	{
		name: 'Hono',
		image: hono,
		url: 'https://hono.dev/'
	},
	{
		name: 'Nest.js',
		image: nestjs,
		url: 'https://nestjs.com/'
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
