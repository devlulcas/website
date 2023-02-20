<script>
	import { Coffee, Github, Linkedin } from 'lucide-svelte';
	import { t } from '$lib/i18n';
</script>

<div class="relative full-bleed h-[90vh] ">
	<article
		class="absolute inset-0 z-[1] px-[5%] md:px-[20%] h-full flex flex-col justify-center items-start"
	>
		<h1 class="font-black text-5xl md:text-6xl text-brand-600 backdrop-blur-sm">
			{$t('homepage.hero.title')}
		</h1>

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
				<span class="font-bold">Vamos conversar</span>
				<Coffee />
			</a>
		</p>
	</article>

	<div class="z-[-1] relative">
		<div class="circle absolute -right-1/2 rounded-full w-5/6 aspect-square" />

		<div class="tag">Lorem</div>

		<div class="tag">Lorem Ipsum</div>

		<div class="tag">Dolor sit at amet</div>

		<div class="tag">Lorem ipsum dolor sit amet consectetur adipisicing elit?</div>

		<div class="tag">Lorem</div>

		<div class="tag">Lorem ipsum</div>
	</div>
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

	.tag {
		@apply absolute py-2 px-6 border bg-white text-brand-700 shadow-2xl rounded-sm right-10;

		&:first-child {
			transform: rotate(-10deg) translateX(-10rem) translateY(-10rem);
		}

		&:nth-child(2) {
			transform: rotate(-10deg) translateX(-10rem) translateY(10rem);
		}

		&:nth-child(3) {
			transform: rotate(18deg) translateX(-10rem) translateY(10rem);
		}

		&:nth-child(4) {
			transform: rotate(13deg) translateX(-15rem) translateY(30rem);
		}
		&:nth-child(5) {
			transform: rotate(-2deg) translateX(-15rem) translateY(45rem);
		}

		&:nth-child(6) {
			transform: rotate(5deg) translateX(-15rem) translateY(40rem);
		}
	}
</style>
