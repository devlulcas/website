<script lang="ts">
	import { website } from '$/lib/assets/config/website';
	import IconUimGithubAlt from '$/lib/assets/icons/icon-uim-github-alt.svelte';
	import IconUimLinkedinAlt from '$/lib/assets/icons/icon-uim-linkedin-alt.svelte';
</script>

<p class="flex w-full flex-col gap-2">
	<a
		class="flex items-center gap-2"
		href={website.social.linkedIn}
		target="_blank"
		rel="noopener noreferrer"
	>
		<IconUimLinkedinAlt/>
		Lucas Alves Rego
	</a>

	<a
		class="flex items-center gap-2"
		href={website.social.github}
		target="_blank"
		rel="noopener noreferrer"
	>
		<IconUimGithubAlt/>
		github.com/devlulcas
	</a>
</p>
