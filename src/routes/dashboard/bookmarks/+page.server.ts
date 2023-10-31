import { error, fail } from '@sveltejs/kit';
import { z } from 'zod';
import { zfd } from 'zod-form-data';

export const actions = {
	createBookmark: async ({ request, locals: { supabase, getSession } }) => {
		const session = await getSession();

		if (!session) {
			throw error(401, { message: 'Unauthorized' });
		}

		const formData = await request.formData();

		const formSchema = zfd.formData({
			url: zfd.text(z.string().url()),
			ptBrDescription: zfd.text(z.string().min(16)),
			enDescription: zfd.text(z.string().min(16)),
			title: zfd.text(z.string())
		});

		const parsedFormData = formSchema.safeParse(formData);

		if (!parsedFormData.success) {
			return fail(400, { message: 'Invalid form data.', success: false });
		}

		const { error: createBookmarkError, data: newBookmark } = await supabase.from('bookmarks').insert({
			url: parsedFormData.data.url,
			pt_br_description: parsedFormData.data.ptBrDescription,
			en_description: parsedFormData.data.enDescription,
			title: parsedFormData.data.title,
			user_id: session.user.id
		});

		if (createBookmarkError) {
			return fail(500, {
				message: createBookmarkError.message,
				success: false
			});
		}

		return {
			newBookmark,
      success: true
		};
	}
};
