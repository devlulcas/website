<script lang="ts">
	import CopyToClipboard from '$/lib/components/CopyToClipboard.svelte';
	import { afterNavigate } from '$app/navigation';
	import { website } from '$lib/config/website';
	import type { PageData } from './$types';
	import { ArrowUpIcon } from 'lucide-svelte';
	import Seo from '$/lib/components/SEO.svelte';

	export let data: PageData;

	// if we came from /posts, we will use history to go back to preserve
	// posts pagination
	let canGoBack = false;

	afterNavigate(({ from }) => {
		if (from && from.url.pathname.startsWith('/blog')) {
			canGoBack = true;
		}
	});

	function goBack() {
		if (canGoBack) {
			history.back();
		}
	}
</script>

<Seo
	seo={{
		title: data.post.title + ' | ' + website.title,
		description: data.post?.excerpt,
		url: `${website.url}/blog/${data.post.slug}`,
		image: data.post.ogImage
	}}
/>

<CopyToClipboard />

<svelte:element
	this={canGoBack ? 'button' : 'a'}
	class="fixed bottom-2 left-2 px-3 py-2 bg-opacity-50 backdrop-blur-sm bg-gray-900 dark:bg-gray-800 rounded-md text-white"
	href={canGoBack ? undefined : '/blog'}
	aria-label="Go back to posts"
	on:click={goBack}
	on:keydown={goBack}
>
	Voltar
</svelte:element>

<div class="content">
	<svelte:component this={data.component} />
</div>

<button
	class="fixed flex gap-2 items-center bottom-2 right-2 px-3 py-2 bg-opacity-50 backdrop-blur-sm bg-gray-900 dark:bg-gray-800 rounded-md text-white"
	on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
	<span> Ir para o topo </span>
	<ArrowUpIcon size={18} />
</button>
