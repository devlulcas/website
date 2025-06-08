import type { PostMetadata } from '../types/post-metadata';

export function getPostRecommendations(posts: Readonly<PostMetadata[]>, currentPostIndex: number) {
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

	if (currentPostIndex === 0) {
		recommendations[0] = posts[currentPostIndex + 1];
		recommendations[1] = posts[currentPostIndex + 2];
		return recommendations;
	}

	if (currentPostIndex === posts.length - 1) {
		recommendations[0] = posts[currentPostIndex - 1];
		recommendations[1] = posts[currentPostIndex - 2];
		return recommendations;
	}

	if (hasOneRecommendation && currentPostIndex > 0) {
		recommendations.unshift(posts[currentPostIndex - 1]);
	}

	if (hasOneRecommendation && currentPostIndex < posts.length - 1) {
		recommendations.push(posts[currentPostIndex + 1]);
	}

	return recommendations;
}
