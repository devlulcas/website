<!-- TYPESCRIPT -->
<script lang="ts">
	export let href: string;
</script>

<!-- HTML -->
<li>
	<a sveltekit:prefetch {href}><slot /></a>
</li>

<!-- STYLES - SCSS -->
<style lang="scss">
	a {
		display: block;
		font-size: clamp(0.9rem, 3vw, 1.1rem);
		padding: 0.5vw 1vw;
		background: #000;
		color: #fff;
		border-radius: 0.25rem;
		text-decoration: none;
	}
</style>
