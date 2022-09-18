<!-- HTML -->
<div>
	<slot />
</div>

<!-- STYLES - SCSS -->
<style lang="scss">
	div {
		width: 100%;

		@media screen and (min-width: 90rem) {
			padding-block: 10rem;
		}
	}
</style>
