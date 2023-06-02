<script>
	import { Github, Linkedin, Sprout } from 'lucide-svelte';
	import { t } from '$lib/i18n';
	import { website } from '../config/website';
</script>

<footer
	class="overflow-hidden w-full h-[--footer-height] flex flex-col lg:flex-row items-center justify-center lg:justify-around text-sm p-4 bg-gray-200 text-gray-800 dark:text-white dark:bg-gray-800"
>
	<div class="flex gap-2 items-center">
		<a href={website.repository} target="_blank" rel="noopener noreferrer">
			{$t('homepage.footer.codeForThisWebsite')}
		</a>

		<Sprout class="inline-block text-brand-600 fill-brand-600" size={18} aria-hidden="true" />

		<a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">
			{$t('homepage.footer.poweredBy')}
			<strong class="font-medium text-brand-600">Svelte</strong>
		</a>
	</div>

	<div class="flex gap-2 items-center">
		<a
			class="flex items-center gap-2 font-medium"
			title="Github"
			href={website.socials.github}
			target="_blank"
			rel="noopener noreferrer"
		>
			<Github class="text-brand-600 fill-brand-600" size={18} aria-hidden="true" />
			<span>devlulcas</span>
		</a>

		<span aria-hidden="true">|</span>

		<a
			class="flex items-center gap-2 font-medium"
			title="LinkedIn"
			href={website.socials.linkedIn}
			target="_blank"
			rel="noopener noreferrer"
		>
			<Linkedin class="text-brand-600 fill-brand-600" size={18} aria-hidden="true" />
			<span>Lucas Alves Rego</span>
		</a>
	</div>
</footer>
