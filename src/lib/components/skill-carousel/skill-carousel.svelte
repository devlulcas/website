<script lang="ts">
	import { skills } from '$/lib/assets/config';
	import SkillCard from '$/lib/components/skill-card/skill-card.svelte';
	import autoplay from 'embla-carousel-autoplay';
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	let className = '';
	export { className as class };
</script>

<div
	class="lc-scroll-container {className}"
	use:emblaCarouselSvelte={{
		options: {
			dragFree: true,
			loop: true
		},
		plugins: [
			autoplay({
				delay: 5000,
				stopOnInteraction: true
			})
		]
	}}
>
	<div class="lc-scroll">
		{#each skills as skill}
			<div class="lc-slide">
				<SkillCard {skill} />
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.lc-scroll-container {
		overflow-x: hidden;
		position: relative;

		&::before,
		&::after {
			content: '';
			display: block;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			background: linear-gradient(
				90deg,
				hsl(var(--background)) 0%,
				transparent 10%,
				transparent 90%,
				hsl(var(--background)) 100%
			);
		}
	}

	.lc-scroll {
		display: flex;
	}

	.lc-slide {
		flex: 0 0 fit-content;
		min-width: 0;
		margin-left: 1rem;
	}
</style>
