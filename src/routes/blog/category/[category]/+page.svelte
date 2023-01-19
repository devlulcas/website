<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

{#each data.posts as post}
	<a href={'/blog/' + post.slug}>
		<h2>{post.title}</h2>
		<p>{post.excerpt.html}</p>
	</a>
{/each}
