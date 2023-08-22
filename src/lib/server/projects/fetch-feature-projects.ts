export type FeaturedProject = {
	name: string;
	description: {
		en: string;
		pt: string;
	};
	details: {
		en: string;
		pt: string;
	};
	url: string;
	code: string;
	tags: string[];
	images: string[];
};

const featuredProjects: FeaturedProject[] = [
	{
		name: 'Just a pretty website',
		description: {
			en: 'A collection of random stuff and generative art',
			pt: 'Uma coleção de coisas aleatórias e arte generativa'
		},
		details: {
			en: 'This is a collection of random stuff and generative art that I made. It is a work in progress, so I will be adding more stuff to it as time goes by.',
			pt: 'Esta é uma coleção de coisas aleatórias e arte generativa que eu fiz. É um trabalho em progresso, então eu vou adicionando mais coisas com o tempo.'
		},
		url: 'https://just-a-pretty-website.vercel.app/',
		code: 'https://github.com/devlulcas/just-a-pretty-website',
		tags: ['generative-art', 'astro'],
		images: [
			'https://just-a-pretty-website.vercel.app/images/og.png',
			'https://just-a-pretty-website.vercel.app/images/og.png',
			'https://just-a-pretty-website.vercel.app/images/og.png'
		]
	}
];

/**
 * Fetches all the featured projects (temporarily hardcoded)
 */
export function fetchFeaturedProjects(): FeaturedProject[] {
	return featuredProjects;
}
