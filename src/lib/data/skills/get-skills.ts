import figma from '$lib/assets/images/skills/figma.svg';
import github from '$lib/assets/images/skills/github.svg';
import kotlin from '$lib/assets/images/skills/kotlin.svg';
import php from '$lib/assets/images/skills/php.svg';
import sass from '$lib/assets/images/skills/sass.svg';
import tailwind from '$lib/assets/images/skills/tailwind.svg';
import git from '$lib/assets/images/skills/git.svg';
import javascript from '$lib/assets/images/skills/javascript.svg';
import next from '$lib/assets/images/skills/next.svg';
import react from '$lib/assets/images/skills/react.svg';
import svelte from '$lib/assets/images/skills/svelte.svg';
import node from '$lib/assets/images/skills/node.svg';
import postgresql from '$lib/assets/images/skills/postgresql.svg';
import firebird from '$lib/assets/images/skills/firebird.svg';
import typescript from '$lib/assets/images/skills/typescript.svg';
import go from '$lib/assets/images/skills/go.svg';
import styled_components from '$lib/assets/images/skills/styled_components.svg';
import type { Skill } from './types';

const skillsUsedAtWork: Skill[] = [
	{
		title: 'PHP',
		icon: php,
		type: 'programmingLanguage'
	},
	{
		title: 'Javascript',
		icon: javascript,
		type: 'programmingLanguage'
	},
	{
		title: 'Typescript',
		icon: typescript,
		type: 'programmingLanguage'
	},
	{
		title: 'Node JS',
		icon: node,
		type: 'jsRuntime'
	},
	{
		title: 'Figma',
		icon: figma,
		type: 'design'
	},
	{
		title: 'Styled Components',
		icon: styled_components,
		type: 'css'
	},
	{
		title: 'Next JS',
		icon: next,
		type: 'framework'
	},
	{
		title: 'React JS',
		icon: react,
		type: 'library'
	},
	{
		title: 'Git',
		icon: git,
		type: 'tool'
	},
	{
		title: 'Firebird SQL',
		icon: firebird,
		type: 'database'
	}
];

const otherSkills: Skill[] = [
	{
		title: 'Kotlin',
		icon: kotlin,
		type: 'programmingLanguage'
	},
	{
		title: 'Svelte Kit',
		icon: svelte,
		type: 'framework'
	},
	{
		title: 'Github',
		icon: github,
		type: 'tool'
	},
	{
		title: 'Postgres SQL',
		icon: postgresql,
		type: 'database'
	},
	{
		title: 'Sass',
		icon: sass,
		type: 'css'
	},
	{
		title: 'Tailwind CSS',
		icon: tailwind,
		type: 'css'
	},
	{
		title: 'Go',
		icon: go,
		type: 'programmingLanguage'
	}
];

export { skillsUsedAtWork, otherSkills };
