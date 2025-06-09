import { load } from 'cheerio';
import type { BlogMetadata } from '../types/blog';

export async function fetchMetadata(url: string): Promise<BlogMetadata> {
	try {
		const response = await fetch(url);
		const html = await response.text();
		const $ = load(html);

		const metadata: BlogMetadata = {};

		// Get Open Graph metadata
		metadata.title =
			$('meta[property="og:title"]').attr('content') ||
			$('meta[name="twitter:title"]').attr('content') ||
			$('title').text();

		metadata.description =
			$('meta[property="og:description"]').attr('content') ||
			$('meta[name="twitter:description"]').attr('content') ||
			$('meta[name="description"]').attr('content');

		metadata.image =
			$('meta[property="og:image"]').attr('content') ||
			$('meta[name="twitter:image"]').attr('content');

		metadata.siteName = $('meta[property="og:site_name"]').attr('content');

		return metadata;
	} catch (error) {
		console.error(`Error fetching metadata for ${url}:`, error);
		return {};
	}
}
