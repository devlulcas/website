<script lang="ts">
	import { website } from '$/lib/assets/config/website';
	import IconUimGithubAlt from '$/lib/assets/icons/icon-uim-github-alt.svelte';
	import errorGif from '$/lib/assets/images/error.gif';
	import Footer from '$/lib/components/footer/footer.svelte';
	import Header from '$/lib/components/header/header.svelte';
	import { t } from '$/lib/i18n';
	import { PUBLIC_MAINTENANCE_MODE } from '$env/static/public';
	import type { Snippet } from 'svelte';
	import '../app.css';
	import '../helpers.css';
	import TvNoise from './tv-noise.svelte';
	import Typewriter from './typewriter.svelte';

	const underMaintenance = PUBLIC_MAINTENANCE_MODE === 'true';

	type Props = {
		children?: Snippet;
	};

	let { children }: Props = $props();
</script>

<a
href="#main-content"
class="bg-brand-600 sr-only top-1 left-1 text-white focus:not-sr-only focus:fixed focus:p-3"
>
{$t('common.skipToContent')}
</a>
<Header />
{@render children?.()}
<Footer />

{#if underMaintenance}
<img loading="lazy" src={errorGif} alt="Error" class="pointer-events-none fixed inset-0 z-50 w-full h-full object-cover" />
<TvNoise options={{ baseAlpha: 0.5, flickerVariation: 0.01, scaleFactor: 1.5 }} class="pointer-events-none fixed inset-0 mix-blend-overlay backdrop-blur-xs z-51" />
	<main class="grid place-items-center h-screen w-screen fixed inset-0 z-52 bg-background/80">
		<div class="flex flex-col items-center justify-center gap-4 font-mono text-center">
			<Typewriter text="$words" speed={100} words={['Under maintenance!', `We'll be back soon!`, 'New year, new updates!', 'Bip bop bip bup!']} />
			<a
				href={website.social.github}
				class="bg-brand-700 hover:bg-brand-800 text-white px-4 py-2 rounded-md transition-all duration-300 flex items-center gap-2 leading-none h-10 justify-center"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconUimGithubAlt />
				github.com/devlulcas
			</a>
		</div>
	</main>
{/if}