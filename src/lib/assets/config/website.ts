import { PUBLIC_HOST } from '$env/static/public';

export const website = {
	title: 'Lucas Alves Rego',
	siteName: 'Blog e portfólio do Devlulcas',
	author: 'Lucas Alves Rego - @devlulcas',
	description:
		'I like to build things. Full-stack developer and curious about everything related to technology.',
	url: PUBLIC_HOST,
	image: `${PUBLIC_HOST}/images/og-image.webp`,
	lang: 'en',
	keywords: ['portfolio', 'blog', 'developer', 'web dev', 'svelte', 'react', 'css', 'typescript'],
	post: {
		cover: `${PUBLIC_HOST}/images/og-image.webp`
	},
	social: {
		github: 'https://github.com/devlulcas',
		linkedIn: 'https://www.linkedin.com/in/lucasalvesrego/',
		email: 'lucasalvesrego.contato@gmail.com'
	}
} as const;
