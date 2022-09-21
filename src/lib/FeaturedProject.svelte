<!-- TYPESCRIPT -->
<script lang="ts">
	import Tag from './Tag.svelte';
	export let reverse: boolean = false;
</script>

<!-- HTML -->
<article class:reversed-container={reverse}>
	<picture />

	<div class="content">
		<div class="text">
			<h3 class:reversed-text={reverse}>Lorem, ipsum dolor.</h3>

			<p class:reversed-text={reverse}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officiis et ex veniam
				repellendus aspernatur sit similique quo. Aliquam, voluptatibus. Porro voluptatum molestias
				cum unde, excepturi reprehenderit!
			</p>
		</div>

		<ul class:reversed-tags={reverse}>
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
		display: flex;
		gap: 1rem;
	}

	picture {
		height: clamp(15rem, 15vw, 25rem);
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
		font-size: clamp(1.6rem, 3vw, 2rem);
		text-align: right;
		font-weight: 600;
		line-clamp: 5;
	}

	p {
		text-align: right;
		margin-top: 1rem;
		font-size: clamp(1rem, 2vw, 1.4rem);
		height: 6.5rem;
		overflow-y: hidden;
		position: relative;

		&::after {
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background-image: linear-gradient(0deg, hsl(0 0% 100%) 5%, hsl(0 0% 100% / 0%) 25%);
		}
	}

	ul {
		justify-content: flex-end;
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.reversed-container {
		flex-direction: row-reverse;
	}

	.reversed-text {
		text-align: left;
	}

	.reversed-tags {
		justify-content: flex-start;
	}
</style>
