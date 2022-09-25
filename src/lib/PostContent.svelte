<!-- TYPESCRIPT -->
<script lang="ts">
	export let content: string;
</script>

<!-- HTML -->
<main class="content">
	{@html content}
</main>

<!-- STYLES - SCSS -->
<style lang="scss">
	.content {
		background: #000;
		min-height: 100vh;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		font-size: 1.2rem;
	}

	.content :global {
		h1 {
			color: blue;
			font-size: 2rem;
		}

		h2 {
			font-size: 1.8rem;
			color: aqua;
		}

		h3 {
			font-size: 1.6rem;
			color: aquamarine;
		}

		p {
			text-indent: 2rem;
			color: darkorange;
		}

		strong {
			color: beige;
		}

		em {
			color: brown;
		}

		del {
			color: coral;
		}

		blockquote p {
			color: rgb(0, 189, 16);
		}

		a {
			color: red;
		}

		img {
			width: 100%;
		}

		table {
			color: darkorchid;
			border: 0.1rem solid #ccc;

			& td,
			& th {
				border: 0.1rem solid #ccc;
				padding: 0.5rem;
			}

			& th {
				font-weight: 800;
			}
		}

		li {
			color: fuchsia;
		}

		pre {
			border-radius: 0.25rem;
			overflow: hidden;

			&::before {
				content: '⬤ ⬤ ⬤';
				color: red;
				background: #ccc;
				width: 100%;
				display: block;
				padding: 0.5rem;
			}
		}
	}
</style>
