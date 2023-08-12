<script lang="ts">
	import { skills } from '$/lib/assets/config';
	import SkillCard from '$/lib/components/skill-card/skill-card.svelte';

	let className = '';
	export { className as class };
</script>

<div class="lc-scroll-container {className}">
	<div class="lc-scroll">
		{#each skills as skill}
			<SkillCard {skill} />
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
		width: fit-content;
		animation-name: loop;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-duration: 30s;
		gap: 1rem;
		overflow-x: hidden;

		@media (prefers-reduced-motion) {
			animation: none;
			flex-wrap: wrap;
		}
	}

	@keyframes loop {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}
</style>
