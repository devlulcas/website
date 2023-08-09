<script lang="ts">
	import { t } from '$/lib/i18n';
	import Socials from './socials.svelte';
</script>

<footer
	class="h-[--footer-height] flex flex-col items-center justify-center gap-2 p-3 text-brand-50 font-bold"
>
	<p class="flex gap-2 items-center flex-wrap">
		<a href="/" target="_blank" rel="noopener noreferrer">
			{$t('common.footer.codeAvailableOn')} github.com/devlulcas/website
		</a>
	</p>

	<Socials />
</footer>

<style lang="postcss">
	footer {
		position: relative;
		background-size: 100% 100%;
		background: linear-gradient(
			76.35deg,
			var(--brand-dark) 5%,
			var(--brand-light) 35%,
			var(--brand-dark) 95%
		);
		animation: background ease 2s infinite;
	}

	@keyframes background {
		from {
			background-position: 0% 0%;
		}
		to {
			background-position: 100% 100%;
		}
	}
</style>
