<script lang="ts">
	import { t } from '$/lib/i18n';
	import Socials from './socials.svelte';
</script>

<footer class="h-[--footer-height] p-3 flex items-center justify-center">
	<div class="flex flex-col justify-center gap-2 font-bold">
		<a href="/" target="_blank" rel="noopener noreferrer">
			{$t('common.footer.codeAvailableOn')} devlulcas/website
		</a>

		<Socials />
	</div>

	<span class="lc-block" />
</footer>

<style lang="postcss">
	footer {
		position: relative;
		z-index: 10;
		background-image: linear-gradient(
			45deg,
			hsl(var(--foreground) / 5%),
			hsl(var(--foreground) / 20%),
			hsl(var(--foreground) / 2%)
		);

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			z-index: -2;
			height: 100%;
			background: linear-gradient(75deg, var(--brand-dark) 5%, var(--brand-light) 35%, var(--brand-dark) 95%);
			animation: background ease 4s infinite;
			background-size: 400% 400%;
		}

		&::after {
			z-index: -1;
			content: '';
			position: absolute;
			inset: 0;
			background-size: 1em 1em;
			background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0.1em, transparent 0.1em),
				linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0.1em, transparent 0.1em);
		}

		&:hover .lc-block {
			opacity: 1;
		}
	}

	@keyframes background {
		from {
			background-position: 0% 0%;
		}
		to {
			background-position: 100% 100%;
		}
	}

	.lc-block {
		opacity: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: -1;
		background-size: 400% 400%;
		backdrop-filter: blur(3px);
		left: -5rem;
		transition: opacity 0.5s ease-in-out;
	}
</style>
