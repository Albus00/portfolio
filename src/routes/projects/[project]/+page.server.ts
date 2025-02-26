import { getProjectById } from '$lib/server/pocketbase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  // Prevent PocketBase requests if the ID is an image
  if (params.project.endsWith('.png')) {
    return { project: null };
  }
  const projectId: string = params.project;
  console.log('projectId:', projectId);

  try {
    const project = await getProjectById(projectId);
    console.log('project:', project);

    return { project: project };
  } catch (error) {
    console.error('Error fetching project:', error);
    return { project: null }; // Ensure project is always defined
  }
};
