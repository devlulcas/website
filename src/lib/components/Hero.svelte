<script>
	import { Coffee, Github, Linkedin } from 'lucide-svelte';
	import { t } from '$lib/i18n';
	import HeroFancyThing from './HeroFancyThing.svelte';
	import ExplosiveTitle from './ExplosiveTitle.svelte';
</script>

<div class="relative full-bleed h-[90vh] ">
	<article
		class="absolute inset-0 z-[1] px-[5%] md:px-[20%] h-full flex flex-col justify-center items-start"
	>
		<ExplosiveTitle title={$t('homepage.hero.title')} />

		<p class="text-lg my-6 lg:w-2/5 text-gray-800 dark:text-gray-100 backdrop-blur-sm">
			{$t('homepage.hero.description')}
		</p>

		<div class="flex gap-4 text-gray-700 dark:text-gray-300">
			<a
				class="flex items-center gap-2 font-bold"
				title="Github"
				href="http://github.com/devlulcas"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Github size={20} />
				<span>Github</span>
			</a>

			<a
				class="flex items-center gap-2 font-bold"
				title="Linkedin"
				href="https://www.linkedin.com/in/lucasalvesregodev/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Linkedin size={20} />
				<span>LinkedIn</span>
			</a>
		</div>

		<p class="text-md mt-6 backdrop-blur-sm">
			<a
				class="lc-cta text-white py-2 px-8 flex items-center rounded-sm w-fit gap-2"
				href="#contact"
			>
				<span class="font-bold"> {$t('homepage.hero.cta')} </span>
				<Coffee />
			</a>
		</p>
	</article>

	<HeroFancyThing />
</div>
