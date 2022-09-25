<!-- TYPESCRIPT -->
<script lang="ts">
	import type { PostMetadata } from '$commonTypes/post';
	import Tag from './Tag.svelte';

	export let metadata: PostMetadata;
</script>

<!-- HTML -->
<a href={metadata.slug}>
	<article>
		<picture />

		<div class="content">
			<h3>{metadata.title}</h3>

			<p>{metadata.excerpt}</p>

			<p>{metadata.date}</p>

			<ul>
				{#each metadata.tags as tag}
					<Tag href={`/blog/tags/${tag}`}>{tag}</Tag>
				{/each}
			</ul>
		</div>
	</article>
</a>

<!-- STYLES - SCSS -->
<style lang="scss">
	a {
		text-decoration: none;
	}

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

		@media screen and (min-width: 90rem) {
			height: 15rem;
		}
	}

	.content {
		padding: 0.5rem 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: space-between;
	}

	h3 {
		font-size: clamp(1.4rem, 2vw, 2rem);
	}

	p {
		font-size: clamp(1rem, 1vw, 1.2rem);
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>
