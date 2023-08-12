<script lang="ts">
	import type { Skill } from '$/lib/assets/config';

	export let skill: Skill;
</script>

<a
	href={skill.url}
	title={skill.name}
	class="relative flex items-center justify-center dark:border bg-dark/10 dark:bg-white/10 rounded w-20 lg:w-28 aspect-square"
>
	<div class="absolute inset-0 w-full flex items-center justify-center h-full backdrop-blur-md z-10">
		<img src={skill.image} alt={skill.name} class="w-1/2 aspect-square" />
	</div>

	<img src={skill.image} alt={skill.name} class="animate-pulse w-1/2 aspect-square opacity-75" />
</a>

<style lang="postcss">
</style>
