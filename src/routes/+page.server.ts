import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// Retorna os projetos
export const load: PageServerLoad = ({ params }) => {
	const post = '';

	if (post) {
		return post;
	}

	throw error(404, 'Not found');
};

// Recebe os e-mails
export const POST = async ({ request, url }) => {
	if (false) throw redirect(307, '/login');

	return {
		status: 404,
		errors: {}
	};
};
