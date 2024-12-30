export type WorkExperience = {
	company: string;
	period: string;
	projects: {
		name: string;
		description: string;
		stack: string[];
	}[];
};

type I18nWorkExperience = {
	ptBr: WorkExperience[];
	en: WorkExperience[];
};

export const experiences = {
	ptBr: [
		{
			company: 'Gerais serviços',
			period: '01/2022 - Presente',
			projects: [
				{
					name: 'Plataforma de eventos esportivos',
					description:
						'Desenvolvimento de plataforma online de eventos esportivos, focada na venda de ingressos para eventos locais. Estamos usando NextJS 14, TipTap, Tanstack Query, Zustand, Typescript, React, Pagar.me, Vitest e RTL para o frontend.',
					stack: [
						'NextJS',
						'TipTap',
						'Tanstack Query',
						'Zustand',
						'Typescript',
						'React',
						'Vitest',
						'RTL',
						'React Hook Forms'
					]
				},
				{
					name: 'Dantas Bikes',
					description:
						'Desenvolvimento de plataforma de e-commerce focada no setor de ciclismo e sua integração com sistemas ERP internos da empresa. Trabalhei a maior parte do tempo no desenvolvimento front-end da aplicação, implementando funcionalidades como carrinho de compras, autenticação, pagamento, listagem de seções, filtros, e fornecendo ajuda e orientação a outros desenvolvedores e estagiários no uso de tecnologias como NextJS, Tanstack Query, Zustand, Typescript, React, Cielo 3DS, Vitest, RTL e melhores práticas de desenvolvimento.',
					stack: [
						'NextJS',
						'Tanstack Query',
						'Zustand',
						'Typescript',
						'React',
						'Cielo 3DS',
						'Vitest',
						'RTL'
					]
				},
				{
					name: 'Gestão de contas a pagar',
					description:
						'Desenvolvimento de uma aplicação para gerenciamento de contas a pagar, onde mantenho uma versão interna de uma biblioteca para validação de notas fiscais (boleto). As tecnologias usadas para esse projeto foram: Vite, React, React Hook Forms e Recoil com PHP no backend com Firebird como nosso banco de dados.',
					stack: ['Vite', 'React', 'React Hook Forms', 'Recoil', 'PHP', 'Firebird']
				}
			]
		}
	],
	en: [
		{
			company: 'Gerais serviços',
			period: '01/2022 - Present',
			projects: [
				{
					name: 'Sports events platform',
					description:
						'Development of an online sports events platform, focused on selling tickets for local events. We are using NextJS 14, TipTap, Tanstack Query, Zustand, Typescript, React, Vitest and RTL for the frontend.',
					stack: [
						'NextJS',
						'TipTap',
						'Tanstack Query',
						'Zustand',
						'Typescript',
						'React',
						'Vitest',
						'RTL',
						'React Hook Forms'
					]
				},
				{
					name: 'Dantas Bikes',
					description:
						"Development of an e-commerce platform focused on the cycling sector and its integration with the company's internal ERP systems. I spent most of the time on the front-end development of the application, implementing features such as shopping cart, authentication, payment, section listing, filters, and providing help and guidance to other developers and interns in the use of technologies such as NextJS, Tanstack Query, Zustand, Typescript, React, Cielo 3DS, Vitest, RTL and best development practices.",
					stack: [
						'NextJS',
						'Tanstack Query',
						'Zustand',
						'Typescript',
						'React',
						'Cielo 3DS',
						'Vitest',
						'RTL'
					]
				},
				{
					name: 'Accounts payable management',
					description:
						'Development of an application for accounts payable management, where I maintain an internal version of a library for invoice validation (boleto). The technologies used for this project were: Vite, React, React Hook Forms and Recoil with PHP on the backend with Firebird as our database.',
					stack: ['Vite', 'React', 'React Hook Forms', 'Recoil', 'PHP', 'Firebird']
				}
			]
		}
	]
} satisfies I18nWorkExperience;
