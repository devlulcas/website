<script lang="ts">
	type Props = {
		text: string;
		thumb: string;
		tags: string[];
	};

	let { text, thumb, tags }: Props = $props();

	let tagsInPacks = $derived(
		tags.reduce((acc, tag, i) => {
			if (i % 3 === 0) {
				acc.push([tag]);
			} else {
				acc[acc.length - 1].push(tag);
			}
			return acc;
		}, [] as string[][])
	);
</script>

<div class="container">
	<div class="card">
		<img src={thumb} alt={text} width="800" />
		<div class="content">
			<p>{text}</p>

			{#if tags}
				<div class="tags">
					{#each tagsInPacks as tagsPack}
						<div>
							{#each tagsPack as tag}
								<span>{tag}</span>
							{/each}
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	div {
		display: flex;
	}

	.container {
		justify-content: center;
		align-items: center;
		height: 630px;
		width: 1200px;
		background-color: transparent;
	}

	.card {
		background-color: #171717;
		width: 100%;
		height: 100%;
		border: 1px solid #262626;
		border-radius: 10px;
		overflow: hidden;
	}

	.content {
		flex-direction: column;
		justify-content: space-between;
		padding: 20px;
	}

	.tags {
		width: 300px;
		flex-direction: column;
	}

	img {
		background-color: #262626;
		height: 100%;
		object-fit: cover;
	}

	p {
		display: flex;
		justify-content: center;
		font-size: 35px;
		width: 300px;
		margin: 5px;
		color: #fafafa;
	}

	span {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 5px 10px;
		margin: 5px;
		border-radius: 5px;
		background-color: #262626;
		color: #fafafa;
	}
</style>
