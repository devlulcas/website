<script lang="ts">
	import { website } from '$/lib/assets/config/website';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { Fa } from 'svelte-fa';
</script>

<p class="flex w-full flex-col gap-2">
	<a
		class="flex items-center gap-2"
		href={website.social.linkedIn}
		target="_blank"
		rel="noopener noreferrer"
	>
		<Fa icon={faLinkedin} />
		Lucas Alves Rego
	</a>

	<a
		class="flex items-center gap-2"
		href={website.social.github}
		target="_blank"
		rel="noopener noreferrer"
	>
		<Fa icon={faGithub} />

		github.com/devlulcas
	</a>
</p>
