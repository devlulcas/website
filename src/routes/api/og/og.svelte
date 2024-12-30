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

<div
	style="display: flex; justify-content: center; align-items: center; height: 630px; width: 1200px; background-color: transparent;"
>
	<div
		style="display: flex; background-color: #171717; width: 100%; height: 100%; border: 1px solid #262626; border-radius: 10px; overflow: hidden;"
	>
		<img
			style="display: flex; background-color: #262626; height: 100%; object-fit: cover;"
			src={thumb}
			alt={text}
			width="800"
		/>
		<div
			style="display: flex; flex-direction: column; justify-content: space-between; padding: 20px;"
		>
			<p
				style="display: flex; justify-content: center; font-size: 35px; width: 300px; margin: 5px; color: #fafafa;"
			>
				{text}
			</p>

			{#if tags}
				<div style="display: flex; width: 300px; flex-direction: column;">
					{#each tagsInPacks as tagsPack}
						<div style="display: flex;">
							{#each tagsPack as tag}
								<span
									style="display: flex; justify-content: center; align-items: center; padding: 5px 10px; margin: 5px; border-radius: 5px; background-color: #262626; color: #fafafa;"
								>
									{tag}
								</span>
							{/each}
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
