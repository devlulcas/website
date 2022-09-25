<!-- TYPESCRIPT -->
<script lang="ts">
	import PostPreview from '$/lib/PostPreview.svelte';
	import type { PageData } from '../../../../../.svelte-kit/types/src/routes/blog/tags/[slug]/$types';

	export let data: PageData;
</script>

<!-- HTML -->
<div>
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
</style>
