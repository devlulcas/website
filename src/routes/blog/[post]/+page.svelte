<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { website } from '$lib/config/website';
	import type { PageData } from './$types';

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

<svelte:element
	this={canGoBack ? 'button' : 'a'}
	href={canGoBack ? undefined : '/blog'}
	aria-label="Go back to posts"
	on:click={goBack}
	on:keydown={goBack}
>
	Voltar
</svelte:element>

<h1>
	{data.post.title}
</h1>

<svelte:component this={data.component} />
