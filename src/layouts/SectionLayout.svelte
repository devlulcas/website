<!-- HTML -->
<section>
	<slot />
</section>

<!-- STYLES - SCSS -->
<style lang="scss">
	section {
		width: 100%;
		height: calc(100vh - var(--header-height));
		padding: 1rem;

		@media screen and (min-width: 90rem) {
			padding: 1rem 4.5rem;
		}
	}
</style>
