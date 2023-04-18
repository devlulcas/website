import { formatISOToLocaleString } from '$/lib/helpers/formaters';
import type { Project, ProjectEdge } from './types';

export function fromProjectEdgeToProjectEntity({ node }: ProjectEdge): Project {
	const projectPicture = `https://raw.githubusercontent.com/devlulcas/${node.name}/main/.github/images/preview.png`;

	return {
		picture: projectPicture,
		description: node.description || 'No description',
		homepageUrl: node.homepageUrl || node.url,
		languages: node.languages?.nodes.map((node) => node.name) || [],
		name: node.name,
		url: node.url,
		createdAt: formatISOToLocaleString(node.createdAt)
	};
}
