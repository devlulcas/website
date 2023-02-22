<script lang="ts">
	import { tags } from '$lib/config/content';
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
