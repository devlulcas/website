<script>
	import HeroContent from '$lib/HeroContent.svelte';
	import HeroImage from '$lib/HeroImage.svelte';
</script>

<!-- HTML -->
<main>
	<HeroContent />
	<HeroImage />
</main>

<!-- STYLES - SCSS -->
<style lang="scss">
	main {
		height: calc(100vh - var(--header-height));
		position: relative;
		overflow: hidden;
	}
</style>
