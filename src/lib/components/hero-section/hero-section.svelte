<script>
	import { t } from '$/lib/i18n';
	import { ArrowRightIcon, Code2Icon, CoffeeIcon, GithubIcon, LinkedinIcon } from 'lucide-svelte';
</script>

<div class="overflow-hidden relative col-span-12 col-start-1 h-[--view-height]">
	<article class="px-[5%] lg:px-[20%] h-full flex flex-col justify-center items-start">
		<h1 class="text-5xl md:text-6xl font-black">
			{$t('home.about.title')}
		</h1>

		<p class="text-lg my-6 lg:w-2/5">
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
				<GithubIcon size={20} />
				<span>Github</span>
			</a>

			<a
				class="flex items-center gap-2 font-bold"
				title="Linkedin"
				href="https://www.linkedin.com/in/lucasalvesregodev/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<LinkedinIcon size={20} />
				<span>LinkedIn</span>
			</a>
		</div>

		<p class="text-md mt-6 backdrop-blur-sm">
			<a
				class="lc-line overflow-clip lc-gradient text-white py-2 px-8 flex items-center rounded-sm w-fit gap-2"
				href="#contact"
			>
				<span class="font-bold"> {$t('home.about.callToAction.contact')} </span>
				<CoffeeIcon />
			</a>

			<a href="/about" class="text-neutral-700 dark:text-neutral-300 mt-2 flex items-center gap-2">
				{$t('home.about.callToAction.or')}
				{$t('home.about.callToAction.seeMore')}
				<ArrowRightIcon size={18} />
			</a>
		</p>
	</article>

	<div class="lc-circle">
		<div class="lc-image">
			<Code2Icon size={68} />
		</div>
	</div>
</div>

<style lang="postcss">
	.lc-circle {
		z-index: -1;
		width: 35rem;
		aspect-ratio: 1;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		right: 0;
		transform: translate(-45%, -50%);

		&::before {
			content: '';
			border-radius: 50%;
			position: absolute;
			inset: 0;
			background-image: linear-gradient(-45deg, var(--brand-light), var(--brand), var(--brand-light));
			animation: spin 20s linear infinite;
		}

		@media (max-width: 1024px) {
			width: 100%;
			top: 0%;
			right: 50%;
			transform: translate(50%, -65%);
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
		left: -20%;
		transform: translate(0%, -50%);
		height: 15rem;
		aspect-ratio: 1;
		padding: 2rem;
		background-image: linear-gradient(45deg, #ffffff0f, #f0f0f05c, #dededefc);
		border-radius: 50%;
		backdrop-filter: blur(1rem);
		border: 1px solid #ffffff5f;
		display: flex;
		justify-content: center;
		align-items: center;

		&::before {
			content: '';
			border-radius: 50%;
			position: absolute;
			inset: 0;
			background-size: 1em 1em;
			background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0.1em, transparent 0.1em),
				linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0.1em, transparent 0.1em);
		}

		@media (max-width: 1024px) {
			align-items: flex-end;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -35%);
		}
	}
</style>
