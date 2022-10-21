<!-- TYPESCRIPT -->
<script lang="ts">
	export let id: string;
</script>

<!-- HTML -->

<h2 {id}><slot /></h2>

<!-- STYLES - SCSS -->
<style lang="scss">
	h2 {
		margin-top: 1rem;
		font-size: clamp(2rem, 4vw, 3rem);
		color: var(--background);
		font-weight: 600;
	}
</style>
