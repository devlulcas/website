<script lang="ts">
  import Footer from '$/lib/components/footer/footer.svelte';
  import Header from '$/lib/components/header/header.svelte';
  import SeoHead from '$/lib/components/seo-head/seo-head.svelte';
  import '$lib/assets/styles/global.css';
  import '$lib/assets/styles/helpers.css';
  import { t } from '$/lib/i18n';
</script>

<SeoHead />

<a
  href="#main-content"
  class="sr-only focus:not-sr-only focus:fixed focus:p-3 top-1 left-1 bg-brand-600 text-white"
>
  {$t('common.skipToContent')}
</a>
<Header />
<slot />
<Footer />
