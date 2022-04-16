<script lang="ts">
	export let visible: boolean;
</script>

<button aria-hidden={visible} aria-label="open mobile menu" on:click />

<style lang="postcss">
	button {
		display: none;
		z-index: 10;

		@media screen and (max-width: 100rem) {
			display: block;
			width: 4rem;
		}
	}
</style>
