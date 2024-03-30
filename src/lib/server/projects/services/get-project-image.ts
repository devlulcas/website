import type { GithubProjectNode } from './get-projects';

export async function getProjectImage(project: GithubProjectNode): Promise<string> {
  const getImageUrl = async () => {
    const githubImages = ['png', 'webp', 'jpg', 'jpeg', 'gif'].map(
      (ext) => `https://raw.githubusercontent.com/devlulcas/${project.name}/main/.github/images/preview.${ext}`,
    );

    const ogs = ['og.png', 'og.webp'].map((src) => (project.homepageUrl ? `${project.homepageUrl}/${src}` : null));

    const possibleImages = [...githubImages, ...ogs.filter(Boolean)] as string[];

    for (const img of possibleImages) {
      const projectImage = img;

      const pingImageResponse = await fetch(projectImage, {
        method: 'HEAD',
      });

      if (pingImageResponse.ok) {
        return projectImage;
      }
    }

    return null;
  };

  const githubImage = await getImageUrl();

  return githubImage ?? '/images/no-image-project.webp';
}
