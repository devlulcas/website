<script lang="ts">
	import Footer from '$/lib/components/footer/footer.svelte';
	import Header from '$/lib/components/header/header.svelte';
	import DefaultPageTransition from '$/lib/components/page-transition/default-page-transition.svelte';
	import { navigating } from '$app/stores';
	import '$lib/assets/styles/global.css';
	import '$lib/assets/styles/nprogress.css';
	import NProgress from 'nprogress';
	import type { LayoutData } from './$types';

	NProgress.configure({
		minimum: 0.16
	});

	$: {
		if ($navigating) {
			NProgress.start();
		} else NProgress.done();
	}
	export let data: LayoutData;
</script>

<DefaultPageTransition pathname={data.pathname}>
	<Header />
	<slot />
	<Footer />
</DefaultPageTransition>
