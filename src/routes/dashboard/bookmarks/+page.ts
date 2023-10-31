import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }) => {
	const { supabase, session } = await parent();

	if (!session) {
		throw redirect(303, '/');
	}

	const { data: bookmarks } = await supabase.from('bookmarks').select('*');

	return {
		user: session.user,
		bookmarks
	};
};
