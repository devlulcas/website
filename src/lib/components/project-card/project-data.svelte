<script lang="ts">
	import { ArrowRightIcon, GithubIcon } from 'lucide-svelte';

	export let name: string;
	export let description: string;
	export let url: string | undefined;
	export let code: string;
	export let tags: string[] = [];
	export let details: string = '';
</script>

<h3 class="text-xl font-semibold uppercase line-clamp-1" title={name}>
	{name}
</h3>

<p class="text-sm mt-1 text-muted-foreground line-clamp-2">
	{description}
</p>

{#if details.length > 0}
	<blockquote class="text-sm mt-1 text-muted-foreground line-clamp-4 italic border-l-2 pl-2">
		{details}
	</blockquote>
{/if}

{#if tags.length > 0}
	<div class="flex flex-wrap gap-1 mt-2 mb-3">
		{#each tags as tag}
			<span class="text-xs bg-accent text-accent-foreground rounded-md px-2 py-1 mt-1">
				{tag}
			</span>
		{/each}
	</div>
{/if}

<footer class="flex justify-between items-center mt-auto">
	<a href={code} target="_blank" class="flex items-center gap-1">
		<GithubIcon size={18} /> Ver código fonte
	</a>

	<a href={url ?? code} target="_blank" class="flex items-center gap-1">
		Ver mais <ArrowRightIcon size={18} />
	</a>
</footer>
