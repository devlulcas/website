<!-- TYPESCRIPT -->
<script lang="ts">
	import Tag from './Tag.svelte';
</script>

<!-- HTML -->
<article>
	<picture />

	<div class="content">
		<h3>Lorem, ipsum dolor.</h3>
		<p>10 de Junho de 2022</p>
		<ul>
			<Tag>algo</Tag>
			<Tag>algo</Tag>
			<Tag>algo</Tag>
			<Tag>algo</Tag>
		</ul>
	</div>
</article>

<!-- STYLES - SCSS -->
<style lang="scss">
	article {
		background: #ccc;
		padding: 1rem;
		display: flex;
		gap: 1rem;
		border-radius: 0.5rem;
	}

	picture {
		height: 10rem;
		aspect-ratio: 1 / 1;
		background: #000;
		border-radius: 0.5rem;
	}

	.content {
		padding: 0.5rem 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: space-between;
	}

	h3 {
		font-size: 1.4rem;
	}

	p {
		font-size: 1rem;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>
