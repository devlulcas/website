<script lang="ts">
	import type { Skill } from '$/lib/assets/config';

	export let skill: Skill;
</script>

<a href={skill.name} class="relative flex flex-col border bg-dark/10 dark:bg-white/10 rounded w-28">
	<span
		class="w-full p-1 text-xs font-semibold bg-opacity-25 bg-white/10 text-card-foreground truncate h-6"
	>
		{skill.name}
	</span>

	<div class="w-full flex items-center justify-center h-20">
		<img src={skill.image} alt={skill.name} class="w-24 md:w-12 aspect-square" />
	</div>
</a>
