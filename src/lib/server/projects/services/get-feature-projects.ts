import type { FeaturedProject } from "../types";

/**
 * Fetches all the featured projects (temporarily hardcoded)
 */
export function getFeaturedProjects(): FeaturedProject[] {
	return [
		{
			name: 'Dantas Bikes',
			description: {
				en: 'E-commerce website for a bike shop',
				pt: 'Site de e-commerce para uma loja de bicicletas'
			},
			details: {
				en: 'This is an e-commerce website for selling bikes and bike accessories. It has a custom CMS for managing the products and orders. It also accepts multiple payment methods, such as 2 credit cards + PIX.',
				pt: 'Este é um site de e-commerce para vender bicicletas e acessórios de bicicleta. Ele tem um CMS customizado para gerenciar os produtos e pedidos. Ele também aceita múltiplos métodos de pagamento, como 2 cartões de crédito + PIX.'
			},
			url: 'https://dantasbikes.com.br',
			code: null,
			tags: ['e-commerce', 'professional'],
			images: ['/images/external/db-home.webp', '/images/external/db-payment.webp', '/images/external/db-product.webp']
		},
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
			images: ['https://just-a-pretty-website.vercel.app/images/og.png']
		}
	]
}
