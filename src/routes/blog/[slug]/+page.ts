import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export async function load({ params }: PageLoad) {
	return params.slug;
	throw error(404, 'Not found');
}
