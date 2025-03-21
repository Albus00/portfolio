import { getProjectGallery } from '$lib/server/pocketbase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  // Prevent PocketBase requests if the ID is an image
  if (params.project.endsWith('.png')) {
    return { project: null };
  }
  const projectId: string = params.project;

  try {
    const project: { images: string[], projectColor: string } = await getProjectGallery(projectId);

    return { gallery: project.images, color: project.projectColor };
  } catch (error) {
    console.error('Error fetching project:', error);
    return { project: null }; // Ensure project is always defined
  }
};
