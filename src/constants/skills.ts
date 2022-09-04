// Skills
import * as skill from '$lib/assets/skills';

export const skills = {
	langs: [
		{ name: 'Javascript', image: skill.js },
		{ name: 'Typescript', image: skill.ts },
		{ name: 'PHP', image: skill.php },
		{ name: 'Dart', image: skill.dart }
	],
	design: [{ name: 'Figma', image: skill.figma }],
	libs: [
		{ name: 'Svelte', image: skill.svelte },
		{ name: 'React', image: skill.react },
		{ name: 'Prisma', image: skill.prisma },
		{ name: 'SvelteKit', image: skill.svelte },
		{ name: 'NextJS', image: skill.next },
		{ name: 'Flutter', image: skill.flutter },
		{ name: 'Node JS', image: skill.nodejs }
	],
	idioms: [
		{ name: 'English', image: skill.eua },
		{ name: 'Português', image: skill.br }
	],
	etc: [
		{ name: 'Html', image: skill.html },
		{ name: 'Css', image: skill.css },
		{ name: 'Sql', image: skill.sql }
	],
	tools: [
		{ name: 'Git', image: skill.git },
		{ name: 'GitHub', image: skill.github }
	]
};

export const all = [
	...skills.langs,
	...skills.design,
	...skills.libs,
	...skills.idioms,
	...skills.tools,
	...skills.etc
];

export type Skills = keyof typeof skills | 'all';
