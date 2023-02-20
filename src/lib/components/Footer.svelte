<script>
	import { Github, Linkedin } from 'lucide-svelte';
	import { t } from '$lib/i18n';
</script>

<footer
	class="w-full flex item-center justify-around bg-gray-200 text-gray-800 dark:text-white dark:bg-gray-800 text-sm p-4"
>
	<div class="flex flex-col">
		<a href="http://" target="_blank" rel="noopener noreferrer">
			{$t('homepage.footer.codeForThisWebsite')}
		</a>

		<p>
			{$t('homepage.footer.poweredBy')}
			<a
				href="https://svelte.dev/"
				class="font-bold text-brand-500"
				target="_blank"
				rel="noopener noreferrer"
			>
				Svelte
			</a>
		</p>
	</div>

	<div class="flex flex-col justify-center">
		<a
			class="flex items-center gap-2 font-bold"
			title="Github"
			href="http://github.com/devlulcas"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Github class="text-brand-500 fill-brand-500" size={16} />
			<span>Github</span>
		</a>

		<a
			class="flex items-center gap-2 font-bold"
			title="Linkedin"
			href="https://www.linkedin.com/in/lucasalvesregodev/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Linkedin class="text-brand-500 fill-brand-500" size={16} />
			<span>
				{$t('homepage.footer.linkedIn')}
			</span>
		</a>
	</div>
</footer>
