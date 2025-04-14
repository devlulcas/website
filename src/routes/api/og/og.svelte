<script lang="ts">
	import { website } from '$/lib/assets/config/website';

	export type OgImageProps = {
		language: string;
		text: string;
		thumb: string;
		tags: string[];
		publishedOn: string;
	};

	const siteName = website.url.replace('https://', '').replace('http://', '').replace(/\/$/, '');

	let { text, thumb, tags, language, publishedOn }: OgImageProps = $props();

	// Group tags in packs of 3 for better layout
	let tagsInPacks = $derived(
		tags.reduce((acc, tag, i) => {
			if (i % 3 === 0) {
				acc.push([]);
			}
			acc[acc.length - 1].push(tag);
			return acc;
		}, [] as string[][])
	);

	const taggedWithText =
		{ en: 'TAGGED WITH', 'pt-br': 'ETIQUETADO COM' }[language] || 'TAGGED WITH';

	const publishedOnText =
		{ en: 'Published on', 'pt-br': 'Publicado em' }[language] || 'Published on';
</script>

<div
	style="display: flex; justify-content: center; align-items: center; height: 630px; width: 1200px; background-color: #0f0f0f; font-family: 'Inter', system-ui, -apple-system, sans-serif;"
>
	<div
		style="display: flex; width: 1160px; height: 590px; background-color: #171717; border: 1px solid #262626; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.25);"
	>
		<!-- Left side - Image -->
		<div style="display: flex; position: relative; width: 630px; height: 590px; overflow: hidden;">
			<img style="width: 100%; height: 100%; object-fit: cover;" src={thumb} alt={text} />
			<!-- Gradient overlay for contrast with text -->
			<div
				style="display: flex; position: absolute; bottom: 0; left: 0; width: 100%; height: 120px; background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0));"
			></div>
		</div>

		<!-- Right side - Content -->
		<div
			style="display: flex; flex-direction: column; justify-content: space-between; width: 530px; padding: 50px 40px; background-color: #171717;"
		>
			<!-- Top section -->
			<div style="display: flex; flex-direction: column;">
				<p
					style="font-size: 15px; color: #a3a3a3; font-weight: 500; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;"
				>
					{siteName}
				</p>

				<p
					style="font-size: 42px; line-height: 1.2; color: #ffffff; font-weight: 700; margin-top: 10px; margin-bottom: 20px;"
				>
					{text}
				</p>

				<!-- Horizontal line -->
				<div
					style="display: flex; width: 80px; height: 4px; background-color: #00e62e; margin: 20px 0 30px 0; border-radius: 2px;"
				></div>
			</div>

			<!-- Tags section -->
			{#if tags && tags.length > 0}
				<div style="display: flex; flex-direction: column; margin-top: 20px;">
					<p style="font-size: 15px; color: #a3a3a3; margin-bottom: 10px; font-weight: 500;">
						{taggedWithText}
					</p>

					<div style="display: flex; flex-direction: column; gap: 10px;">
						{#each tagsInPacks as tagsPack}
							<div style="display: flex; gap: 10px;">
								{#each tagsPack as tag}
									<span
										style="display: flex; font-size: 14px; align-items: center; padding: 8px 14px; border-radius: 6px; background-color: #262626; color: #f5f5f5; font-weight: 500;"
									>
										{tag}
									</span>
								{/each}
							</div>
						{/each}
					</div>
				</div>
			{/if}

			<!-- Bottom section - Author/date info or logo -->
			<div style="display: flex; align-items: center; margin-top: 40px;">
				<div
					style="display: flex; width: 32px; height: 32px; border-radius: 16px; background-color: #00b825; align-items: center; justify-content: center; margin-right: 12px;"
				>
					<span style="color: white; font-weight: 700; font-size: 16px;">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-fingerprint-icon lucide-fingerprint"
							><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" /><path
								d="M14 13.12c0 2.38 0 6.38-1 8.88"
							/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" /><path
								d="M2 12a10 10 0 0 1 18-6"
							/><path d="M2 16h.01" /><path d="M21.8 16c.2-2 .131-5.354 0-6" /><path
								d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"
							/><path d="M8.65 22c.21-.66.45-1.32.57-2" /><path d="M9 6.8a6 6 0 0 1 9 5.2v2" /></svg
						>
					</span>
				</div>
				<div style="display: flex; color: #e5e5e5; font-size: 15px; font-weight: 500;">
					{publishedOnText}
					{new Date(publishedOn).toLocaleDateString(language, {
						month: 'long',
						day: 'numeric',
						year: 'numeric'
					})}
				</div>
			</div>
		</div>
	</div>
</div>
