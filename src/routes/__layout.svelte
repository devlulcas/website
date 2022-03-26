<script lang="ts">
	import '../app.css';
</script>

<div>
	<h1>PORTFÓLIO</h1>
</div>
<slot />

<style lang="postcss">
	div {
		background: #000;
		height: 10rem;

		& h1 {
			color: #fff;
		}
	}
</style>
