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

	const skills = [
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

<ul class="flex gap-4 flex-wrap mb-4">
	{#each skills as skill}
		<li
			class="flex items-center min-w-fit gap-2 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 shadow-sm"
		>
			<span class="text-md font-semibold text-gray-700 dark:text-gray-300">
				{skill.title}
			</span>

			<img class="w-8 h-8" width="32" height="32" src={skill.icon} alt={skill.title} />
		</li>
	{/each}
</ul>
