<!-- TYPESCRIPT -->
<script lang="ts">
	import '$assets/styles/highlight.css';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- HTML -->
<pre>
	{JSON.stringify(data.body.metadata)}
</pre>

<div class="content">
	{@html data.body.content}
</div>

<!-- STYLES - SCSS -->
<style lang="scss">
	.content :global {
		h1 {
			color: blue;
		}

		h2 {
			color: aqua;
		}

		h3 {
			color: aquamarine;
		}

		p {
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
		}

		li {
			color: fuchsia;
		}
	}
</style>
