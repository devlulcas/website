<script lang="ts">
	type SEOProps = {
		title?: string;
		description?: string;
		image?: string;
		url?: string;
		type?: string;
		twitter?: string;
	};

	const defaultSEO: SEOProps = {
		title: 'Devlulcas - Web Development',
		description: 'Web Development Blog',
		image: 'https://www.lucasrego.tech/og.png',
		url: 'https://www.lucasrego.tech/',
		type: 'website',
		twitter: '@devlulcas'
	};

	export let seo: SEOProps = defaultSEO;
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />

	<!-- twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={seo.twitter ?? defaultSEO.twitter} />
	<meta name="twitter:creator" content={seo.twitter ?? defaultSEO.twitter} />
	<meta name="twitter:title" content={seo.title ?? defaultSEO.title} />
	<meta name="twitter:description" content={seo.description ?? defaultSEO.description} />
	<meta name="twitter:image" content={seo.image ?? defaultSEO.image} />

	<!-- og -->
	<meta property="og:url" content={seo.url ?? defaultSEO.url} />
	<meta property="og:type" content={seo.type ?? defaultSEO.type} />
	<meta property="og:title" content={seo.title ?? defaultSEO.title} />
	<meta property="og:description" content={seo.description ?? defaultSEO.description} />
	<meta property="og:image" content={seo.image ?? defaultSEO.image} />
</svelte:head>
