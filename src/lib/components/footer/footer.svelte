<script lang="ts">
	import { website } from '$/lib/assets/config/website';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { Fa } from 'svelte-fa';
</script>

<footer
	class="flex h-[--footer-height] items-center justify-center p-3 text-brand-700 print:hidden"
>
	<a
		class="flex h-10 w-10 items-center justify-center gap-2 rounded bg-white bg-opacity-0 hover:bg-opacity-50"
		href={website.social.linkedIn}
		title="LinkedIn"
		aria-label="LinkedIn"
		target="_blank"
		rel="noopener noreferrer"
	>
		<Fa icon={faLinkedin} />
	</a>

	<a
		class="flex h-10 w-10 items-center justify-center gap-2 rounded bg-white bg-opacity-0 hover:bg-opacity-50"
		href={website.social.github}
		target="_blank"
		title="GitHub"
		aria-label="GitHub"
		rel="noopener noreferrer"
	>
		<Fa icon={faGithub} />
	</a>
</footer>

<style lang="postcss">
	footer {
		position: relative;
		z-index: 10;

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			z-index: -2;
			height: 100%;
			background: linear-gradient(
				75deg,
				var(--brand-dark) 25%,
				var(--brand-light) 50%,
				var(--brand-dark) 75%
			);
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
	}
</style>
