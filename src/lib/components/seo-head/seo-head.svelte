<script lang="ts">
	import { website } from '$/lib/assets/config/website';

	type Props = {
		title?: string;
		description?: string;
		keywords?: string[];
		image?: string;
		url?: string;
	};

	let props: Props = $props();

	const metadata = {
		title:
			props.title && props.title !== website.title
				? `${props.title} | ${website.title}`
				: website.title,
		description: props.description || website.description,
		keywords: (props.keywords || website.keywords).join(', '),
		image: props.image || website.image,
		url: props.url || website.url,
		siteName: website.siteName
	};
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<meta name="description" content={metadata.description} />
	<meta name="keywords" content={metadata.keywords} />
	<meta name="author" content={website.author} />
	<meta name="robots" content="index, follow" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={metadata.url} />
	<meta property="og:title" content={metadata.title} />
	<meta property="og:description" content={metadata.description} />
	<meta property="og:image" content={metadata.image} />
	<meta property="og:site_name" content={metadata.siteName} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={metadata.url} />
	<meta name="twitter:title" content={metadata.title} />
	<meta name="twitter:description" content={metadata.description} />
	<meta name="twitter:image" content={metadata.image} />

	<!-- sitemap.xml and rss.xml -->
	<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
	<link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml" />
	<link rel="alternate" type="application/rss+xml" title="Atom" href="/atom.xml" />
</svelte:head>
