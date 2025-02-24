import { getProjectById } from '$lib/server/pocketbase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const { project: id } = params;
  try {
    const project = await getProjectById(id);
    console.log('project:', project);

    return { project };
  } catch (error) {
    console.error('Error fetching project:', error);
    return { project: null }; // Ensure project is always defined
  }
};
