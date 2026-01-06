import { website } from '$/lib/assets/config/website';
import { extractCategories } from '$/lib/server/posts/lib/categories';
import { GLOBAL_POSTS_SLIM } from '$/lib/server/posts/services/get-posts';
import fs from 'node:fs';
import path from 'node:path';

export const prerender = true;

export async function GET() {
	const categories = extractCategories(GLOBAL_POSTS_SLIM);

	// read everything in the src/routes folder, then only considers the ones with a +page.svelte file
	const routes = fs
		.readdirSync(path.join('src', 'routes'), { recursive: true })
		.filter((file) => typeof file === 'string' && file.endsWith('+page.svelte'))
		.map((file) => {
			if (typeof file !== 'string') {
				throw new Error('File is not a string');
			}

			const pathname = file.replace(/\/\+page\.svelte|\+page\.svelte/, '');

			const route = website.url + '/' + pathname;

			if (route.includes('[post]')) {
				return GLOBAL_POSTS_SLIM.map(({ slug, date }) => ({
					url: route.replace('[post]', slug),
					date: new Date(date).toISOString()
				}));
			}

			if (route.includes('[category]')) {
				return categories.map((slug) => ({
					url: route.replace('[category]', slug),
					date: new Date().toISOString()
				}));
			}

			return {
				url: route,
				date: new Date().toISOString()
			};
		})
		.flat();

	const urls = routes.map((route) => {
		return `
    <url>
      <loc>${route.url}</loc>
      <lastmod>${route.date}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.5</priority>
    </url>
  `;
	});

	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
      <url>
        <loc>${website.url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      ${urls.join('')}
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
