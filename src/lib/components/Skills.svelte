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

	type Skill = {
		title: string;
		icon: string;
	};

	const skills: Skill[] = [
		{
			title: 'Figma',
			icon: figma
		},
		{
			title: 'Github',
			icon: github
		},
		{
			title: 'Kotlin',
			icon: kotlin
		},
		{
			title: 'PHP',
			icon: php
		},
		{
			title: 'Sass',
			icon: sass
		},
		{
			title: 'Tailwind CSS',
			icon: tailwind
		},
		{
			title: 'Git',
			icon: git
		},
		{
			title: 'Javascript',
			icon: javascript
		},
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
		},
		{
			title: 'Postgres SQL',
			icon: postgresql
		},
		{
			title: 'Typescript',
			icon: typescript
		}
	];
</script>

<div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-4">
	{#each skills as skill}
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
