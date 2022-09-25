<!-- TYPESCRIPT -->
<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Heading from '$lib/Heading.svelte';
</script>

<!-- HTML -->
<footer>
	<ul>
		<li>
			<i>#</i>
			<a href="/">GitHub</a>
		</li>

		<li>
			<i>#</i>
			<a href="/">LinkedIn</a>
		</li>

		<li>
			<i>#</i>
			<a href="/">Twitter</a>
		</li>

		<li>
			<i>#</i>
			<a href="/">Blog</a>
		</li>
	</ul>
</footer>

<!-- STYLES - SCSS -->
<style lang="scss">
	footer {
		padding: 1rem 0;
	}

	ul {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	li {
		background-color: var(--background);

		display: flex;
		align-items: center;
		justify-content: center;
		grid-template: 1rem;
		backdrop-filter: blur(1rem);
		border-radius: 0.25rem;
		padding: 0.5rem;
		border: 0.2rem solid black;
		box-shadow: 0.5rem 0.5rem 0 black;

		&:hover {
			transform: scale(1.1);
		}
	}

	i {
		padding-left: 0.5rem;
	}

	a {
		padding: 0.5rem 1rem;
		text-decoration: none;
		color: var(--on-background);
		font-weight: 600;
	}
</style>
