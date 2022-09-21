<!-- TYPESCRIPT -->
<script lang="ts">
	import Image from './Image.svelte';

	export let image = '';
</script>

<!-- HTML -->
<div class="container">
	<Image src={image} alt={'tech'} height={25} width={25} />
	<p><slot /></p>
</div>

<!-- STYLES - SCSS -->
<style lang="scss">
	.container {
		width: fit-content;
		padding: 0.5rem;
		padding-right: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		background: #ccc;
		color: #000;
		border-radius: 0.25rem;
	}
</style>
