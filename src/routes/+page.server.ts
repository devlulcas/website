import { sendEmailNotification } from '$/lib/server/contact';
import { fetchPosts } from '$/lib/server/posts';
import { fetchFeaturedProjects, fetchProjects } from '$/lib/server/projects';
import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import { zfd } from 'zod-form-data';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = await fetchPosts();

	const featuredPost = posts[0];

	const recentPosts = posts.splice(1, 3);

	const featuredProjects = fetchFeaturedProjects();

	const projects = await fetchProjects();

	return { featuredProjects, projects, recentPosts, featuredPost };
};

export const actions: Actions = {
	// Send a message from the contact form
	sendMessage: async (event) => {
		const formData = await event.request.formData();

		const contactSchema = zfd.formData({
			name: zfd.text(),
			email: zfd.text(z.string().email()),
			avocado: zfd.text(z.string().nullish()),
			message: zfd.text()
		});

		const formDataResult = contactSchema.safeParse(formData);

		if (formDataResult.success === false) {
			console.error(formDataResult.error);
			return fail(400, { message: 'Invalid form data' });
		}

		if (formDataResult.data.avocado) {
			console.log('bot detected');
			return fail(400, { message: 'Invalid form data' });
		}

		const result = await sendEmailNotification({
			content: formDataResult.data.message,
			subject: `New message from ${formDataResult.data.name} on your website (${formDataResult.data.email})`
		});

		if (result.success === false) {
			console.error(result.error);
			return fail(500, { message: 'Error sending email' });
		}

		return { message: 'Message sent' };
	},
	// Change the users theme based on the url and save that state in a cookie
	setTheme: async ({ cookies, url }) => {
		const theme = url.searchParams.get('theme');

		if (theme) {
			const fullYear = 60 * 60 * 24 * 365;

			cookies.set('theme', theme, {
				path: '/',
				maxAge: fullYear
			});
		}

		redirectTo(url);
	},
	// Change the users language based on the url and save that state in a cookie
	setLocale: async ({ cookies, url }) => {
		const currentLanguageSetting = url.searchParams.get('lang');

		if (currentLanguageSetting) {
			cookies.set('lang', currentLanguageSetting);
		}

		redirectTo(url);
	}
};

function redirectTo(url: URL) {
	const redirectTo = url.searchParams.get('redirectTo') ?? '/';
	const doNotRedirect = url.searchParams.get('doNotRedirect') === 'true';

	if (doNotRedirect) return;

	if (redirectTo && redirectTo.startsWith('/')) {
		throw redirect(303, redirectTo);
	}

	throw redirect(303, '/');
}
