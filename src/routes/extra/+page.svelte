<script lang="ts">
	import ContainerSection from '$/lib/components/container-section/default.svelte';
</script>

<main class="lc-grid px-4 lg:px-8 pb-8 gap-y-10">
	<ContainerSection id="posts" title="lorem ipsum" class="min-h-[--view-height]">
		<p class="text-lg text-muted-foreground mb-4">Lorem ipsum dolor sit amet.</p>

		<div aria-hidden="true" class="h-[1px] lc-line w-full bg-brand-500 dark:bg-brand-800 rounded-full my-4" />

		<div class="flex gap-2">
			<article class="border rounded relative overflow-hidden">
				<img
					src="https://m.media-amazon.com/images/M/MV5BZjFmYmU4ZDctMWI4MS00MGY5LWJhZjEtMThhNjhkMDk0MDljXkEyXkFqcGdeQXVyMTUwNjg3NTUw._V1_FMjpg_UX1080_.jpg"
					width={390 / 1.5}
					height={590 / 1.5}
					alt="Lorem, ipsum."
					style="object-fit: cover; object-position: center; aspect-ratio: 390 / 590;"
				/>

				<div class="p-1 w-full absolute bottom-0">
					<div class="border p-2 w-full rounded bg-card">
						<h3 class="text-xl font-bold mb-1">Lorem, ipsum.</h3>
						<p class="text-muted-foreground">Lorem ipsum dolor sit amet consectetur.</p>
					</div>
				</div>
			</article>
		</div>
	</ContainerSection>
</main>
