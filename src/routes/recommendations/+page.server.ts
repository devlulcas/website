import { getBlogs } from '$/lib/server/blogs/services/get-blogs';
import type { PageServerLoad } from './blogs/$types';

export const load: PageServerLoad = async () => {
	const blogs = await getBlogs();
	console.log(blogs);
	return { blogs };
};
