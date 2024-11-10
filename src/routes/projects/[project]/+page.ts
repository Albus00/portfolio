import { projects } from '$lib/data/projects';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const { project } = params;

  // Find the project by name by searching through each category
  const projectData = projects.find((p) => p.id === project);
  console.log(projectData);

  return projectData;
}