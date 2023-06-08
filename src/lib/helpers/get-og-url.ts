/**
 * Creates a URL to the Open Graph image for the post
 *
 * @param title the title of the post
 * @returns an URL to the Open Graph image for the post
 */
export function getOgImage(title: string) {
	const url = new URL('https://www.lucasrego.tech/og');

	url.searchParams.set('text', title);

	return url.toString();
}
