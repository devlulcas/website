export type WorkExperience = {
	company: string;
	period: string;
	warning?: string;
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
			company: 'Venturix',
			period: '01/2025 - Atual',
			projects: []
		},
		{
			company: 'Bloop',
			period: '11/2024 - 01/2025',
			warning: 'Transferido para a Venturix',
			projects: [
				{
					name: 'Sistema de venda e gerenciamento de info-produtos',
					description: 'Aplicações administrativas, de gerenciamento de conteúdos e vendas para SaaS do ramo de info-produtos',
					stack: [
						'NextJS',
						'Tanstack Query',
						'Zustand',
						'Typescript',
						'React',
						'React Hook Forms',
						'Chackra UI',
					]
				}
			]
		},
		{
			company: 'Plin Tech',
			period: '05/2024 - 11/2024',
			projects: [
				{
					name: 'Dashboard de administração de eventos',
					description: 'Aplicações administrativas para SaaS do ramo de eventos',
					stack: [
						'NextJS',
						'Tanstack Query',
						'Zustand',
						'Typescript',
						'Sistemas de pagamentos',
						'React',
						'React Hook Forms',
					]
				},
				{
					name: 'Plin PDV',
					description: 'Aplicação móvel para dispositivos PDV (maquininhas de pagamento)',
					stack: [
						'React Native',
						'Tanstack Query',
						'Sistemas de pagamentos',
						'Zustand',
						'Typescript',
						'React',
						'Kotlin',
						'Expo',
					]
				}
			]
		},
		{
			company: 'Gerais serviços',
			period: '01/2022 - 11/2024',
			projects: [
				{
					name: 'Plataforma de eventos esportivos',
					description: 'Plataforma online de eventos esportivos, focada na venda de ingressos para eventos locais',
					stack: [
						'NextJS',
						'TipTap',
						'Tanstack Query',
						'Zustand',
						'Typescript',
						'Sistemas de pagamentos',
						'React',
						'Vitest',
						'RTL',
						'React Hook Forms'
					]
				},
				{
					name: 'Dantas Bikes',
					description: 'Plataforma de e-commerce focada no setor de ciclismo integrado com sistemas ERP internos da empresa. Trabalhei a maior parte do tempo no desenvolvimento front-end da aplicação, implementando funcionalidades como carrinho de compras, autenticação, pagamento, listagem de seções, filtros, e fornecendo ajuda e orientação a outros desenvolvedores e estagiários no uso de tecnologias modernas e melhores práticas de desenvolvimento',
					stack: [
						'NextJS',
						'Tanstack Query',
						'Zustand',
						'Typescript',
						'React',
						'Sistemas de pagamentos',
						'Vitest',
						'RTL'
					]
				},
				{
					name: 'Gestão de contas a pagar',
					description: 'Desenvolvimento de uma aplicação para gerenciamento de contas a pagar onde mantive uma versão interna de uma biblioteca para validação de notas fiscais (boleto)',
					stack: ['Vite', 'React', 'React Hook Forms', 'Recoil', 'PHP', 'Firebird']
				},
				{
					name: 'Luthier PHP Web Framework',
					description: 'Desenvolvimento de um framework PHP para desenvolvimento de aplicações web, especialmente APIs REST, com foco em performance e simplicidade de uso',
					stack: ['PHP', 'PHP PDO', 'Firebird']
				}
			]
		}
	],
	en: [
		{
			company: 'Venturix',
			period: '2025/01 - Current',
			projects: []
		},
		{
			company: 'Bloop',
			period: '2024/11 - 2025/01',
			warning: 'Transferred to Venturix',
			projects: [
				{
					name: 'System of sales and management of info-products',
					description: 'Management applications, content management and sales for SaaS of info-products',
					stack: [
						'NextJS',
						'Tanstack Query',
						'Zustand',
						'Typescript',
						'React',
						'React Hook Forms',
						'Chackra UI',
					]
				}
			]
		},
		{
			company: 'Plin Tech',
			period: '2024/05 - 2024/11',
			projects: [
				{
					name: 'Sports Events admin dashboard',
					description: "Admin applications for and sports events industry's SaaS",
					stack: [
						'NextJS',
						'Tanstack Query',
						'Zustand',
						'Typescript',
						'Payment Systems',
						'React',
						'React Hook Forms',
					]
				},
				{
					name: 'Plin POS',
					description: 'Mobile application for POS (point of sale) devices',
					stack: [
						'React Native',
						'Tanstack Query',
						'Payment Systems',
						'Zustand',
						'Typescript',
						'React',
						'Kotlin',
						'Expo',
					]
				}
			]
		},
		{
			company: 'Gerais serviços',
			period: '2022/01 - 2024/11',
			projects: [
				{
					name: 'Plataforma de eventos esportivos',
					description: 'Plataforma online de eventos esportivos, focada na venda de ingressos para eventos locais',
					stack: [
						'NextJS',
						'TipTap',
						'Tanstack Query',
						'Zustand',
						'Typescript',
						'Payment Systems',
						'React',
						'Vitest',
						'RTL',
						'React Hook Forms'
					]
				},
				{
					name: 'Dantas Bikes',
					description: "E-commerce platform focused on the cycling sector integrated with the company's internal ERP systems. I spent most of my time developing the application on the front-end, implementing features such as shopping cart, authentication, payment, section listings, filters, and providing help and guidance to other developers and interns on using modern technologies and development best practices.",
					stack: [
						'NextJS',
						'Tanstack Query',
						'Zustand',
						'Typescript',
						'React',
						'Payment Systems',
						'Vitest',
						'RTL'
					]
				},
				{
					name: 'Accounts Payable Management',
					description: "Development of an application for managing accounts payable where I maintained an internal version of a library for validating invoices (bills)",
					stack: ['Vite', 'React', 'React Hook Forms', 'Recoil', 'PHP', 'Firebird']
				},
				{
					name: 'Luthier PHP Web Framework',
					description: 'Development of a PHP framework for developing web applications, especially REST APIs, with a focus on performance and ease of use',
					stack: ['PHP', 'PHP PDO', 'Firebird']
				}
			]
		}
	]
} satisfies I18nWorkExperience;
