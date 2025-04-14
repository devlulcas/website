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
					style="display: flex; width: 32px; height: 32px; border-radius: 16px; background-color: #00e62e; align-items: center; justify-content: center; margin-right: 12px;"
				>
					<span style="color: white; font-weight: 700; font-size: 16px;">
						{siteName.charAt(0)}
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
