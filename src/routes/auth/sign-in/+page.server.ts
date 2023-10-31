import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';

export const actions = {
	signIn: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();

		const formSchema = zfd.formData({
			email: zfd.text(),
			password: zfd.text()
		});

		const parsedFormData = formSchema.safeParse(formData);

		if (!parsedFormData.success) {
			console.log(parsedFormData.error)
			return fail(400, { message: 'Invalid form data.', success: false, email: '' });
		}

		const { error } = await supabase.auth.signInWithPassword({
			email: parsedFormData.data.email,
			password: parsedFormData.data.password
		});

		if (error) {
			if (error instanceof AuthApiError && error.status === 400) {
				return fail(400, {
					error: 'Invalid credentials.',
					values: { email: parsedFormData.data.email }
				});
			}
			return fail(500, {
				error: 'Server error. Try again later.',
				values: { email: parsedFormData.data.email }
			});
		}

		throw redirect(303, '/dashboard');
	},
	signOut: async ({ locals: { supabase } }) => {
		await supabase.auth.signOut();
		throw redirect(303, '/');
	}
};
