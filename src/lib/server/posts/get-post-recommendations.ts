import type { PostMetadata } from './fetch-posts';

export function getPostRecommendations(posts: PostMetadata[], currentPostIndex: number) {
	const recommendations: PostMetadata[] = [];

	const previousPost = posts[currentPostIndex - 1];
	const nextPost = posts[currentPostIndex + 1];

	if (previousPost) {
		recommendations.push(previousPost);
	}

	if (nextPost) {
		recommendations.push(nextPost);
	}

	const hasOneRecommendation = recommendations.length === 1;

	if (hasOneRecommendation && currentPostIndex > 0) {
		recommendations.unshift(posts[currentPostIndex - 1]);
	}

	if (hasOneRecommendation && currentPostIndex < posts.length - 1) {
		recommendations.push(posts[currentPostIndex + 1]);
	}

	return recommendations;
}
