import type { FeaturedProject } from '../types';

/**
 * Fetches all the featured projects (temporarily hardcoded)
 */
export function getFeaturedProjects(): FeaturedProject[] {
	return [bikesECommerce, coatiQuati, devMed];
}

const bikesECommerce: FeaturedProject = {
	name: 'Dantas Bikes',
	description: {
		en: 'E-commerce website for a bike shop',
		pt: 'Site de e-commerce para uma loja de bicicletas'
	},
	details: {
		en: 'An e-commerce website in the field of cycling and related sports. It has a custom CMS for managing the products and orders. It also accepts multiple payment methods, such as 2 credit cards + PIX.',
		pt: 'Um e-commerce no ramo do ciclismo e esportes relacionados. Ele tem um CMS customizado para gerenciar os produtos e pedidos. Ele também aceita múltiplos métodos de pagamento, como 2 cartões de crédito + PIX.'
	},
	url: 'https://dantasbikes.com.br',
	code: null,
	tags: {
		both: [
			'React',
			'TypeScript',
			'Node.js',
			'NextJS',
			'FirebirdSQL',
			'CSS Modules',
			'Vitest',
			'React Testing Library',
			'Tailwind CSS',
			'Zustand',
			'Tanstack Query'
		],
		pt: ['Integração com pagamento'],
		en: ['Payment integration']
	},
	images: [
		'/images/external/db-home.webp',
		'/images/external/db-payment.webp',
		'/images/external/db-product.webp'
	]
};

const coatiQuati: FeaturedProject = {
	name: 'CoatiQuati',
	description: {
		en: 'Educational platform for self-taught students',
		pt: 'Plataforma educacional para estudantes autodidatas'
	},
	details: {
		pt: 'Uma plataforma educacional focada em compartilhar conhecimento de forma gratuita, moderada por professores voluntários. Os alunos podem publicar seu próprio material e seguir uns aos outros como em uma rede social.',
		en: 'An educational platform focused on sharing knowledge for free, moderated by volunteer teachers. Students can publish their own material and follow each other like in a social network.'
	},
	url: 'https://coatiquati.wiki',
	code: 'https://github.com/devlulcas/coatiquati',
	tags: {
		both: [
			'React',
			'TypeScript',
			'Node.js',
			'NextJS',
			'LibSQL',
			'Tailwind CSS',
			'Tanstack Query',
			'ShadCn UI',
			'DrizzleORM'
		],
		pt: ['Rede social', 'Educação'],
		en: ['Social network', 'Education']
	},
	images: ['/images/external/cq-home.webp', '/images/external/cq-dashboard.webp']
};

const devMed: FeaturedProject = {
	name: 'MedApp',
	description: {
		pt: 'Plataforma educacional para estudantes de medicina',
		en: 'Educational platform for medical students'
	},
	details: {
		pt: 'Uma plataforma educacional focada em ajudar estudantes de medicina a obterem conhecimento de forma gratuita, mantida por um estudante de medicina e com fontes confiáveis. Possui sistema de simulação de interações entre o corpo e substâncias.',
		en: 'An educational platform focused on helping medical students to obtain knowledge for free, maintained by a medical student and with reliable sources. It has a system for simulating interactions between the body and substances.'
	},
	url: 'https://devmed.online',
	code: null,
	tags: {
		both: [
			'React',
			'TypeScript',
			'Node.js',
			'NextJS',
			'LibSQL',
			'Tailwind CSS',
			'Tanstack Query',
			'ShadCn UI',
			'Prisma',
			'NestJS',
			'NextAuth',
			'React Native',
			'Expo'
		],
		pt: ['Aplicativo móvel', 'Educação'],
		en: ['Mobile app', 'Education']
	},
	images: ['/images/external/ma-home.webp']
};
