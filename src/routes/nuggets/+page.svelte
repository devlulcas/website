<script lang="ts">
	import IconFaCircle from '$/lib/assets/icons/icon-fa-circle.svelte';
	import NuggetContainer from '$/lib/components/nugget-container/nugget-container.svelte';
	import SeoHead from '$/lib/components/seo-head/seo-head.svelte';

	let { data } = $props();
</script>

<SeoHead title="Nuggets" description="Pedacinhos de conhecimento" />

<main id="main-content" class="min-h-[--view-height]">
	<div class="container">
		{#each data.nuggets as nugget}
			{@const title = nugget.slug.replaceAll('-', ' ')}
			<article class="relative grid grid-cols-1 gap-2 py-4 lg:grid-cols-2">
				<div
					style="top: calc(var(--header-height) + 1rem)"
					class="lc-svg-pattern left-0 h-fit w-full rounded-lg border lg:sticky"
				>
					<img
						class="h-auto w-full rounded-lg object-cover transition-all duration-300 ease-in-out lg:aspect-square"
						src={nugget.image}
						alt={title}
					/>
				</div>

				<div class="lc-content flex w-full flex-col md:flex-row-reverse">
					<div class="lc-tab relative flex flex-col justify-start md:items-center">
						<div class="left-full top-0 h-10 w-fit origin-top-left md:absolute md:rotate-90">
							<p
								class="flex h-10 w-fit translate-y-[1x] items-center justify-center text-nowrap rounded-t-lg border border-b-2 border-b-background px-3 font-serif italic"
							>
								{title}
								<IconFaCircle class="mx-2 size-1" />
								{nugget.language.niceName}
								<IconFaCircle class="mx-2 size-1" />
								{nugget.year}
							</p>
						</div>
					</div>
					<div
						class="lc-text rounded-lg rounded-tl-none border p-6 md:rounded-tl-lg md:rounded-tr-none"
					>
						<NuggetContainer>
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							{@html nugget.content}
						</NuggetContainer>
					</div>
				</div>
			</article>
		{/each}
	</div>
</main>

<style>
	.lc-svg-pattern {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23ffffff32' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
	}

	@media (min-width: 768px) {
		.lc-content {
			--tab-width: calc(2.5rem - 1px);
			--text-width: calc(100% - var(--tab-width));
		}

		.lc-text {
			width: calc(100% - var(--tab-width));
		}

		.lc-tab {
			width: var(--tab-width);
		}
	}
</style>
