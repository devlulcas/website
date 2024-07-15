<script lang="ts">
  import Footer from "$/lib/components/footer/footer.svelte";
  import Header from "$/lib/components/header/header.svelte";
  import SeoHead from "$/lib/components/seo-head/seo-head.svelte";
  import "$lib/assets/styles/global.css";
  import "$lib/assets/styles/helpers.css";
</script>

<SeoHead />

<Header />
<slot />
<Footer />
