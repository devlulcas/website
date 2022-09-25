import type { PostMetadata } from '$commonTypes/post';

type OrderBy = 'recent' | 'old';

export function sortPostsByDate(
	metadata: PostMetadata[],
	order: OrderBy = 'recent'
): PostMetadata[] {
	return metadata.sort((actual, next) => {
		const first = new Date(actual.date).getTime();

		const second = new Date(next.date).getTime();

		if (order === 'old') {
			return second - first;
		}

		return first - second;
	});
}
