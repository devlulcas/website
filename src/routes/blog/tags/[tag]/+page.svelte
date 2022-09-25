<!-- TYPESCRIPT -->
<script lang="ts">
	import Heading from '$/lib/Heading.svelte';
	import PostPreview from '$/lib/PostPreview.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- HTML -->
<div>
	<Heading id={data.slug}>Tag -> {data.slug}</Heading>

	<ul>
		{#each data.posts as post}
			<li>
				<PostPreview metadata={post} />
			</li>
		{/each}
	</ul>
</div>

<!-- STYLES - SCSS -->
<style lang="scss">
	div {
		width: 100%;
		padding: 1rem;

		@media screen and (min-width: 90rem) {
			padding: 1rem 25rem;
		}
	}

	ul {
		display: flex;
		gap: 2.5rem;
		flex-direction: column;
		margin-top: 2rem;

		@media screen and (min-width: 90rem) {
			flex-flow: row wrap;
		}
	}
</style>
