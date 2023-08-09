<script lang="ts">
	import { website } from '$/lib/assets/config';

	export let title = website.title;
	export let description = website.description;
	export let keywords = website.keywords;
	export let image = website.image;
</script>

<svelte:head>
	<title>{title !== website.title ? `${title} | ${website.title}` : website.title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords.join(', ')} />
	<meta name="author" content={website.author} />
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={website.url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={website.description} />
	<meta property="og:image" content={image} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={website.url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>
