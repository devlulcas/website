import { sendEmailNotification } from '$/lib/server/contact';
import { fetchPosts } from '$/lib/server/posts';
import { fetchFeaturedProjects, fetchProjects } from '$/lib/server/projects';
import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import { zfd } from 'zod-form-data';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const featuredPosts = await fetchPosts();

	const featuredProjects = fetchFeaturedProjects();

	const projects = await fetchProjects().catch((e) => {
		console.error(e);
		return [];
	});

	return { featuredProjects, projects, featuredPosts: featuredPosts.slice(0, 3) };
};

const contactSchema = zfd.formData({
	name: zfd.text(),
	email: zfd.text(z.string().email()),
	zummm: zfd.text(z.string().nullish()),
	message: zfd.text()
});

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();

		const formDataResult = contactSchema.safeParse(formData);

		if (formDataResult.success === false) {
			console.error(formDataResult.error);
			return fail(400, { message: 'Invalid form data' });
		}

		if (formDataResult.data.zummm) {
			console.log('bot detected');
			return fail(400, { message: 'Invalid form data' });
		}

		sendEmailNotification({
			content: formDataResult.data.message,
			from: formDataResult.data.email,
			subject: `New message from ${formDataResult.data.name} on your website`
		});
	},
	setTheme: async ({ cookies, url }) => {
		const theme = url.searchParams.get('theme');
		const redirectTo = url.searchParams.get('redirectTo') ?? '/';
		const doNotRedirect = url.searchParams.get('doNotRedirect') === 'true';

		if (theme) {
			const fullYear = 60 * 60 * 24 * 365;

			cookies.set('theme', theme, {
				path: '/',
				maxAge: fullYear
			});
		}

		if (doNotRedirect) return;

		if (redirectTo && redirectTo.startsWith('/')) {
			throw redirect(303, redirectTo);
		}

		throw redirect(303, '/');
	}
};
