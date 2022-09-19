<!-- HTML -->
<div class="image">
	<div class="foreground" />
</div>

<!-- STYLES - SCSS -->
<style lang="scss">
	.image {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		z-index: -1;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.foreground {
		width: 100%;
		height: 100%;
		background: #a0a0ff;

		@media screen and (min-width: 90rem) {
			width: 50%;
		}
	}
</style>
