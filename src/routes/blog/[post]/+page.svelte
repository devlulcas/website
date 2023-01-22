<script lang="ts">
	import CopyToClipboard from '$/lib/components/CopyToClipboard.svelte';
	import { afterNavigate } from '$app/navigation';
	import { website } from '$lib/config/website';
	import type { PageData } from './$types';
	import { ArrowUpIcon } from 'lucide-svelte';
	export let data: PageData;

	// generated open-graph image for sharing on social media.
	// see https://og-image.vercel.app/ for more options.
	const ogImage = `https://og-image.vercel.app/**${encodeURIComponent(
		data.post.title
	)}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`;

	const url = `${website.url}/${data.post.slug}`;

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
