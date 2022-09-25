import type { Project } from '$commonTypes/project';

export interface ProjectGraphQlReturn {
	data: {
		viewer: {
			repositories: {
				edges: Array<{
					node: Project;
				}>;
			};
		};
	};
}

export interface PinnedProjectGraphQlReturn {
	data: {
		viewer: {
			pinnedItems: {
				edges: Array<{
					node: Project;
				}>;
			};
		};
	};
}
