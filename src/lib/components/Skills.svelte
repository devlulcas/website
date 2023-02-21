<script lang="ts">
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
	import typescript from '$lib/assets/images/skills/typescript.svg';
	import go from '$lib/assets/images/skills/go.svg';
	import styled_components from '$lib/assets/images/skills/styled_components.svg';
	import { t, locale } from '$lib/i18n';

	type SkillType = 'programming-language' | 'framework' | 'tool' | 'css' | 'learning' | 'other';

	type Skill = {
		title: string;
		icon: string;
	};

	type SkillGroup = {
		type: SkillType;
		skills: Skill[];
	};

	type SkillsTypeTranslation = Record<SkillType, string>;

	const skills: SkillGroup[] = [
		{
			type: 'programming-language',
			skills: [
				{
					title: 'Kotlin',
					icon: kotlin
				},
				{
					title: 'PHP',
					icon: php
				},
				{
					title: 'Javascript',
					icon: javascript
				},
				{
					title: 'Typescript',
					icon: typescript
				}
			]
		},
		{
			type: 'framework',
			skills: [
				{
					title: 'Next JS',
					icon: next
				},
				{
					title: 'React JS',
					icon: react
				},
				{
					title: 'Svelte Kit',
					icon: svelte
				},
				{
					title: 'Node JS',
					icon: node
				}
			]
		},
		{
			type: 'tool',
			skills: [
				{
					title: 'Figma',
					icon: figma
				},
				{
					title: 'Github',
					icon: github
				},
				{
					title: 'Git',
					icon: git
				},
				{
					title: 'Postgres SQL',
					icon: postgresql
				}
			]
		},
		{
			type: 'css',
			skills: [
				{
					title: 'Sass',
					icon: sass
				},
				{
					title: 'Tailwind CSS',
					icon: tailwind
				},
				{
					title: 'Styled Components',
					icon: styled_components
				}
			]
		},
		{
			type: 'learning',
			skills: [
				{
					title: 'Go',
					icon: go
				}
			]
		}
	];

	$: translateSkillType = (type: SkillType) => {
		const en: SkillsTypeTranslation = {
			'programming-language': 'Programming languages',
			framework: 'Frameworks',
			tool: 'Tools',
			css: 'CSS',
			learning: 'Learning',
			other: 'Other'
		};

		const ptBr: SkillsTypeTranslation = {
			'programming-language': 'Linguagens de programação',
			framework: 'Frameworks',
			tool: 'Ferramentas',
			css: 'CSS',
			learning: 'Aprendendo',
			other: 'Outro'
		};

		if ($locale === 'en') return en[type];
		if ($locale.includes('pt')) return ptBr[type];
	};
</script>

<p
	class="text-center md:text-left text-sm md:text-base font-semibold text-gray-800 mb-2 dark:text-gray-200"
>
	{$t('homepage.skills.about')}
</p>

{#each skills as { type, skills: group }}
	<p
		class="text-center md:text-left text-sm md:text-base font-semibold text-gray-600 mb-2 dark:text-gray-200 mt-3"
	>
		{translateSkillType(type)}
	</p>

	<div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-2">
		{#each group as skill}
			<div class="flex items-center gap-3 p-1 md:p-2 bg-gray-100 rounded-sm">
				<img src={skill.icon} alt={skill.title} class="w-6 h-6 md:w-8 md:h-8" />
				<span
					class="text-center md:text-left text-sm md:text-base font-semibold text-gray-800 truncate"
				>
					{skill.title}
				</span>
			</div>
		{/each}
	</div>
{/each}
