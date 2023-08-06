<script lang="ts">
	import { GithubIcon, HeartHandshakeIcon, LinkedinIcon } from 'lucide-svelte';
</script>

<div class="h-[--footer-height] lc-cta border-t">
	<footer
		class="h-[98%] flex flex-col items-center justify-center gap-2 p-3 bg-card text-card-foreground"
	>
		<p class="flex gap-2 items-center flex-wrap">
			Código disponível em
			<a href="/" target="_blank" rel="noopener noreferrer"> github.com/devlulcas </a>
			using
			<a href="https://svelte.dev" target="_blank" rel="noopener noreferrer"> Svelte </a>
			<HeartHandshakeIcon class="text-brand-700 dark:text-brand-500" />
		</p>

		<p class="flex items-center gap-2">
			<a
				class="flex items-center gap-2"
				href="https://www.linkedin.com/in/lucasalvesregodev/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<LinkedinIcon class="text-brand-700 dark:text-brand-500" />
				Lucas Alves Rego
			</a>

			<span> &nbsp;|&nbsp; </span>

			<a
				class="flex items-center gap-2"
				href="https://www.github.com/devlulcas"
				target="_blank"
				rel="noopener noreferrer"
			>
				<GithubIcon class="text-brand-700 dark:text-brand-500" />

				github.com/devlulcas
			</a>
		</p>
	</footer>

	<div class="w-full h-2" />
</div>
