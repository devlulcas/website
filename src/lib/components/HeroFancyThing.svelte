<script lang="ts">
	const tags = [
		{
			tag: 'Typescript',
			rotation: 10,
			x: 0,
			y: 2.5
		},
		{
			tag: 'Go',
			rotation: 18,
			x: -10,
			y: 10
		},
		{
			tag: 'Modern PHP',
			rotation: 0,
			x: -10,
			y: 15
		},
		{
			tag: 'Javascript. The good, the bad and the ugly',
			rotation: 12.5,
			x: -15,
			y: 30
		},
		{
			tag: 'Backend and Frontend',
			rotation: 5,
			x: -15,
			y: 40
		},
		{
			tag: 'HTML, CSS and Svelte',
			rotation: -2.5,
			x: -35,
			y: 45
		}
	];
</script>

<div class="z-[-1] relative">
	<div class="circle absolute -right-1/2 rounded-full w-5/6 aspect-square" />

	{#each tags as tag}
		<span
			style="transform: rotate({tag.rotation}deg) translateX({tag.x}rem) translateY({tag.y}rem)"
			class="absolute py-2 px-6 border bg-white text-brand-700 shadow-2xl rounded-sm right-10"
		>
			{tag.tag}
		</span>
	{/each}
</div>

<style lang="postcss">
	.circle {
		background-image: linear-gradient(-45deg, var(--brand-light), var(--brand), var(--brand-light));

		animation: circle 5s ease-in-out infinite;
	}

	@keyframes circle {
		0% {
			transform: rotate(0deg) translateX(0) translateY(0);
		}
		100% {
			transform: rotate(360deg) translateX(0) translateY(0);
		}
	}
</style>
