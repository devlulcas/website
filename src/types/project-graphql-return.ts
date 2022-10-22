import type { Project } from "./project";

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
