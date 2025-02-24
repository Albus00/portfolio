import { getProjects } from '$lib/server/pocketbase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  try {
    const projects = await getProjects();
    return { projects };
  } catch (error) {
    console.error('Error fetching projects:', error);
    return { projects: [] }; // Ensure projects is always defined
  }
};
