import { getPosts } from '$/lib/server/posts/services/get-posts';
import { getDemoProjects } from '$/lib/server/projects/services/get-demo-projects';
import { getFeaturedProjects } from '$/lib/server/projects/services/get-feature-projects';
import { getProjects } from '$/lib/server/projects/services/get-projects';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = await getPosts();

	const featuredPost = posts[0];

	const recentPosts = posts.splice(1, 3);

	const featuredProjects = getFeaturedProjects();

	const projects = getProjects();

	const demos = getDemoProjects();

	return {
		featuredProjects,
		recentPosts,
		featuredPost,
		lazy: { projects, demos }
	};
};

export const actions: Actions = {
	// Send a message from the contact form
	sendMessage: async ({ request }) => {
		const formData = await request.formData();
		const formValueName = formData.get('name');
		const formValueEmail = formData.get('email');
		const formValueMessage = formData.get('message');

		if (!formValueName || !formValueEmail || !formValueMessage) {
			return fail(400, {
				type: 'failure',
				message: {
					ptBr: 'Por favor, preencha todos os campos',
					en: 'Please fill all the fields'
				}
			});
		}

		const name = formValueName.toString();
		const email = formValueEmail.toString();
		const message = formValueMessage.toString();

		try {
			console.log(`[${name} | ${email}] sent you an e-mail - ${message}`);

			return {
				type: 'success',
				message: {
					ptBr: 'Mensagem enviada com sucesso!',
					en: 'Message sent successfully!'
				}
			};
		} catch (error) {
			console.error(error);

			return fail(500, {
				type: 'failure',
				message: {
					ptBr: 'Erro ao enviar a mensagem',
					en: 'Error sending the message'
				}
			});
		}
	},
	// Change the users theme based on the url and save that state in a cookie
	setTheme: async ({ cookies, url }) => {
		const theme = url.searchParams.get('theme');

		if (theme) {
			cookies.set('theme', theme, {
				path: '/',
				maxAge: 60 * 60 * 24 * 365
			});
		}

		redirectTo(url);
	},
	// Change the users language based on the url and save that state in a cookie
	setLocale: async ({ cookies, url }) => {
		const currentLanguageSetting = url.searchParams.get('lang');

		if (currentLanguageSetting) {
			cookies.set('lang', currentLanguageSetting, {
				path: '/',
				maxAge: 60 * 60 * 24 * 365
			});
		}

		redirectTo(url);
	}
};

function redirectTo(url: URL) {
	const redirectTo = url.searchParams.get('redirectTo') ?? '/';
	const doNotRedirect = url.searchParams.get('doNotRedirect') === 'true';

	if (doNotRedirect) return;

	if (redirectTo && redirectTo.startsWith('/')) {
		redirect(303, redirectTo);
	}

	redirect(303, '/');
}
