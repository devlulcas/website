import { error } from '@sveltejs/kit';
import type { Action, PageServerLoad } from './$types';

// Retorna os projetos
export const load: PageServerLoad = ({ params }) => {
	const post = 'some cool stuff';

	if (post) {
		return { post };
	}

	throw error(404, 'Not found');
};

// Recebe os e-mails
export const POST: Action = async ({ request, url }) => {
	// throw redirect(307, '/login');

	return {
		status: 404,
		errors: {}
	};
};
