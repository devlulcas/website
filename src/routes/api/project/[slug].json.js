import { projects } from '../../../data/projects';

let namedProjects = {};

projects.forEach((project) => {
	const name = project.name.toLowerCase().replaceAll(' ', '_');
	namedProjects[name] = project;
});

export async function get({ params }) {

	const project = namedProjects[params.slug];

	if (project) {
		return {
			status: 200,
			body: {
				code: 200,
				project
			}
		};
	}
	return {
		status: 404,
		body: {
			code: 404,
			message: 'Not found!'
		}
	};
}
