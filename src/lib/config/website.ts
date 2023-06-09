import { PUBLIC_HOST } from "$env/static/public";

export const website = {
	title: 'Devlulcas',
	description: 'Olá, eu sou o Devlulcas, um desenvolvedor de software que gosta de criar coisas.',
	url: PUBLIC_HOST,
	image: PUBLIC_HOST + '/image.png',
	author: 'Devlulcas - Lucas Rego',
	repository: 'https://github.com/devlulcas/website',
	socials: {
		github: 'https://github.com/devlulcas',
		linkedIn: 'https://www.linkedin.com/in/lucasalvesregodev'
	},
	auth: {
		github: {
			initUrl: PUBLIC_HOST + '/api/oauth/github/init',
			callbackUrl: PUBLIC_HOST + '/api/oauth/github/callback'
		}
	}
};
