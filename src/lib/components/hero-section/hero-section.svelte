<script lang="ts">
	import IconDuoMessage2 from '$/lib/assets/icons/icon-duo-message2.svelte';
	import IconHeroiconsSolidCode from '$/lib/assets/icons/icon-heroicons-solid-code.svelte';
	import IconUimAngleRight from '$/lib/assets/icons/icon-uim-angle-right.svelte';
	import IconUimGithub from '$/lib/assets/icons/icon-uim-github.svelte';
	import IconUimLinkedin from '$/lib/assets/icons/icon-uim-linkedin.svelte';
	import { t } from '$/lib/i18n';
	import Eye from './eye.svelte';
</script>

<div
	class="col-span-12 col-start-1 flex min-h-[--view-height] flex-col gap-5 py-5 lg:col-span-8 lg:col-start-3 lg:flex-row"
>
	<article class="flex h-full w-full flex-col items-start justify-center">
		<h1 class="text-5xl font-black md:text-6xl">
			{$t('home.about.title')}
		</h1>

		<p class="my-6 text-lg lg:w-3/5" style="text-wrap: balance;">
			{$t('home.about.description')}
		</p>

		<div class="flex gap-4">
			<a
				class="flex items-center gap-2 font-bold"
				title="Github"
				href="http://github.com/devlulcas"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconUimGithub />
				<span>Github</span>
			</a>

			<a
				class="flex items-center gap-2 font-bold"
				title="Linkedin"
				href="https://www.linkedin.com/in/lucasalvesregodev/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconUimLinkedin />
				<span>LinkedIn</span>
			</a>
		</div>

		<p class="text-md mt-6 backdrop-blur-sm">
			<a
				class="lc-line lc-gradient flex w-fit items-center gap-2 overflow-clip rounded-sm px-8 py-2 text-white"
				href="#contact"
			>
				<span class="font-bold"> {$t('home.about.callToAction.contact')} </span>
				<IconDuoMessage2 />
			</a>

			<a href="/about" class="mt-2 flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
				{$t('home.about.callToAction.or')}
				{$t('home.about.callToAction.seeMore')}
				<IconUimAngleRight />
			</a>
		</p>
	</article>

	<div class="relative flex w-full items-center justify-end lg:justify-center">
		<div aria-hidden="true" class="lc-circle">
			<Eye />

			<div class="lc-image">
				<IconHeroiconsSolidCode />
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.lc-circle {
		z-index: -1;
		width: clamp(18rem, 40vw, 35rem);
		aspect-ratio: 1;
		border-radius: 50%;
		position: relative;

		::before {
			content: '';
			border-radius: 50%;
			position: absolute;
			inset: 0;
			background-image: linear-gradient(
				-45deg,
				var(--brand-light),
				var(--brand),
				var(--brand-light)
			);
			animation: spin 15s linear infinite;
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.lc-image {
		position: absolute;
		top: 50%;
		left: -27.5%;
		transform: translate(0%, -50%);
		height: clamp(10rem, 20vw, 15rem);
		aspect-ratio: 1;
		padding: clamp(0.5rem, 1vw, 1rem);
		background-image: linear-gradient(45deg, #ffffff0f, #f0f0f05c, #dededefc);
		border-radius: 50%;
		backdrop-filter: blur(1rem);
		border: 1px solid #ffffff5f;
		display: flex;
		justify-content: center;
		align-items: center;

		::before {
			content: '';
			border-radius: 50%;
			position: absolute;
			inset: 0;
			background-size: 1em 1em;
			background-image:
				linear-gradient(rgba(255, 255, 255, 0.1) 0.1em, transparent 0.1em),
				linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0.1em, transparent 0.1em);
		}
	}
</style>
