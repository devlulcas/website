<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_MEASUREMENT_ID } from '$env/static/public';

	const id = PUBLIC_MEASUREMENT_ID;

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', PUBLIC_MEASUREMENT_ID, {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id={PUBLIC_MEASUREMENT_ID}"></script>

	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-RS28SEEG1Z');
	</script>
</svelte:head>
