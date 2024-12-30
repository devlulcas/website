<script lang="ts">
	import type { Skill } from '$/lib/assets/config/skills';

	type Props = {
		skill: Skill;
	};

	let { skill }: Props = $props();
</script>

<a
	href={skill.url}
	title={skill.name}
	class="bg-dark/10 relative flex aspect-square w-20 cursor-pointer select-none items-center justify-center rounded dark:border dark:bg-white/10 lg:w-28"
>
	<div
		class="absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center backdrop-blur-md"
	>
		<img src={skill.image} alt={skill.name} class="aspect-square w-1/2" />

		<p class="mt-1.5 w-full rotate-3 text-center text-xs text-muted-foreground">
			{skill.name}
		</p>
	</div>

	<img src={skill.image} alt={skill.name} class="aspect-square w-1/2 animate-pulse opacity-75" />
</a>

<style lang="postcss">
</style>
