import { browser } from '$app/environment';
import { parse } from 'node-html-parser';
import type { PostMetadata } from '$commonTypes/post';

if (browser) {
	throw new Error('Posts podem ser gerados apenas server side');
}

// Obtém a URL a partir do caminho
function extractSlugFromPostPath(path: string) {
	return path
		.replace(/(\/index)?\.md/, '')
		.split('/')
		.pop();
}

// Transforma a data guardada em uma data abrasileirada
function localizeDate(stringifiedDate: string) {
	const date = new Date(stringifiedDate);

	const dateOptions: Intl.DateTimeFormatOptions = {
		day: '2-digit',
		month: 'long',
		year: 'numeric'
	};

	return date.toLocaleDateString('pt-br', dateOptions);
}

// Organiza posts por data
interface DatedObject {
	date: string | Date;
}

type OrderBy = 'recent' | 'old';
function sortPostsByDate<T extends DatedObject>(metadata: T[], order: OrderBy = 'recent'): T[] {
	return metadata.sort((actual, next) => {
		const first = new Date(actual.date).getTime();

		const second = new Date(next.date).getTime();

		if (order === 'old') {
			return second - first;
		}

		return first - second;
	});
}

// Transforma todos os arquivos em posts úteis
function parsePosts() {
	const posts = files.map(([path, file]) => {
		// Elemento HTML
		const htmlContent = parse(file.default.render().html);

		const slug = extractSlugFromPostPath(path);

		const localizedDate = localizeDate(file.metadata.date);

		// Preview do texto escrito para SEO
		const preview = file.metadata.excerpt
			? parse(file.metadata.excerpt)
			: htmlContent.querySelector('p');

		return {
			...file.metadata,
			slug,
			date: localizedDate,
			isIndexFile: path.endsWith('/index.md'),
			preview: {
				html: preview?.toString(),
				text: preview?.structuredText ?? preview?.toString()
			}
		};
	});

	const sortedPosts = sortPostsByDate(posts);

	// Posts organizados e paginação
	return sortedPosts.map((post, index, allPosts) => ({
		...post,
		next: allPosts[index - 1],
		previous: allPosts[index + 1]
	}));
}

interface PreProcessedFile {
	default: { render: () => any };
	metadata: PostMetadata;
}

const files = Object.entries(import.meta.glob('/posts/**/*.md', { eager: true })) as [
	string,
	PreProcessedFile
][];

// > Todos os posts existentes
export const posts = parsePosts();

export type Post = typeof posts[0];

export function getPostsMetadataByTag(tag: string) {
	return posts.filter((post) => post.tags.includes(tag));
}
