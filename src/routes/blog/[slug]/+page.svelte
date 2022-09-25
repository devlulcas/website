<!-- TYPESCRIPT -->
<script lang="ts">
	import PostContent from '$lib/PostContent.svelte';
	import PostFooter from '$lib/PostFooter.svelte';
	import '$assets/styles/highlight.css';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- HTML -->

<div class="container">
	<PostContent content={data.body.content} />
</div>

<PostFooter time={data.body.metadata.date} />

<!-- STYLES - SCSS -->
<style lang="scss">
	.container {
		width: 100vw;
		overflow: hidden;
		padding: 0 1rem;
		background: #babaca;

		@media screen and (min-width: 90rem) {
			padding: 0rem 25rem;
		}
	}
</style>
