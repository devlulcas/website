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
    cover: 'https://lucasrego.tech/images/og-image.webp',
  },
  social: {
    github: 'https://github.com/devlulcas',
    linkedIn: 'https://www.linkedin.com/in/lucasalvesrego/',
    twitter: 'https://twitter.com/devlulcas',
    email: 'lucasalvesrego.contato@gmail.com',
  },
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
  '4fun',
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
    url: 'https://react.dev/',
  },
  {
    name: 'Next.js',
    image: nextjs,
    url: 'https://nextjs.org/',
  },
  {
    name: 'TypeScript',
    image: typescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Javascript',
    image: javascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'Svelte',
    image: svelte,
    url: 'https://svelte.dev/',
  },
  {
    name: 'Node.js',
    image: node,
    url: 'https://nodejs.org/',
  },
  {
    name: 'Express',
    image: express,
    url: 'https://expressjs.com/',
  },
  {
    name: 'Sass',
    image: sass,
    url: 'https://sass-lang.com/',
  },
  {
    name: 'Sveltekit',
    image: svelte,
    url: 'https://kit.svelte.dev/',
  },
  {
    name: 'Docker',
    image: docker,
    url: 'https://www.docker.com/',
  },
  {
    name: 'Git',
    image: git,
    url: 'https://www.git-scm.com/',
  },
  {
    name: 'Github',
    image: github,
    url: 'https://www.github.com/',
  },
  {
    name: 'PostgreSQL',
    image: postgresql,
    url: 'https://www.postgresql.org/',
  },
  {
    name: 'PHP',
    image: php,
    url: 'https://www.php.net/',
  },
  {
    name: 'FirebirdSQL',
    image: firebird,
    url: 'https://firebirdsql.org/',
  },
  {
    name: 'Go',
    image: go,
    url: 'https://golang.org/',
  },
  {
    name: 'Figma',
    image: figma,
    url: 'https://www.figma.com/',
  },
];

type Experience = {
  company: string;
  period: string;
  projects: {
    name: string;
    description: string;
    stack: string[];
  }[];
};

export const experiences: {
  ptBr: Experience[];
  en: Experience[];
} = {
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
            'React Hook Forms',
          ],
        },
        {
          name: 'Dantas Bikes',
          description:
            'Desenvolvimento de plataforma de e-commerce focada no setor de ciclismo e sua integração com sistemas ERP internos da empresa. Trabalhei a maior parte do tempo no desenvolvimento front-end da aplicação, implementando funcionalidades como carrinho de compras, autenticação, pagamento, listagem de seções, filtros, e fornecendo ajuda e orientação a outros desenvolvedores e estagiários no uso de tecnologias como NextJS, Tanstack Query, Zustand, Typescript, React, Cielo 3DS, Vitest, RTL e melhores práticas de desenvolvimento.',
          stack: ['NextJS', 'Tanstack Query', 'Zustand', 'Typescript', 'React', 'Cielo 3DS', 'Vitest', 'RTL'],
        },
        {
          name: 'Gestão de contas a pagar',
          description:
            'Desenvolvimento de uma aplicação para gerenciamento de contas a pagar, onde mantenho uma versão interna de uma biblioteca para validação de notas fiscais (boleto). As tecnologias usadas para esse projeto foram: Vite, React, React Hook Forms e Recoil com PHP no backend com Firebird como nosso banco de dados.',
          stack: ['Vite', 'React', 'React Hook Forms', 'Recoil', 'PHP', 'Firebird'],
        },
      ],
    },
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
            'React Hook Forms',
          ],
        },
        {
          name: 'Dantas Bikes',
          description:
            "Development of an e-commerce platform focused on the cycling sector and its integration with the company's internal ERP systems. I spent most of the time on the front-end development of the application, implementing features such as shopping cart, authentication, payment, section listing, filters, and providing help and guidance to other developers and interns in the use of technologies such as NextJS, Tanstack Query, Zustand, Typescript, React, Cielo 3DS, Vitest, RTL and best development practices.",
          stack: ['NextJS', 'Tanstack Query', 'Zustand', 'Typescript', 'React', 'Cielo 3DS', 'Vitest', 'RTL'],
        },
        {
          name: 'Accounts payable management',
          description:
            'Development of an application for accounts payable management, where I maintain an internal version of a library for invoice validation (boleto). The technologies used for this project were: Vite, React, React Hook Forms and Recoil with PHP on the backend with Firebird as our database.',
          stack: ['Vite', 'React', 'React Hook Forms', 'Recoil', 'PHP', 'Firebird'],
        },
      ],
    },
  ],
};
