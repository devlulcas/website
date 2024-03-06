<script lang="ts">
  import Footer from '$/lib/components/footer/footer.svelte';
  import Header from '$/lib/components/header/header.svelte';
  import NavigationProgressBar from '$/lib/components/navigation-progress-bar/navigation-progress-bar.svelte';
  import DefaultPageTransition from '$/lib/components/page-transition/default-page-transition.svelte';
  import SeoHead from '$/lib/components/seo-head/seo-head.svelte';
  import '$lib/assets/styles/global.css';
  import '$lib/assets/styles/helpers.css';
  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<NavigationProgressBar />

<SeoHead />

<Header />

<DefaultPageTransition pathname={data.pathname}>
  <slot />
  <Footer />
</DefaultPageTransition>
