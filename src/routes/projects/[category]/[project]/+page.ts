import { projects } from '$lib/data/projects';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const { project } = params;

  // Find the project by name by searching through each category
  let projectData = projects.webApps.find((p) => p.id === project);
  if (!projectData) {
    projectData = projects.games.find((p) => p.id === project);
  }
  if (!projectData) {
    projectData = projects.otherProjects.find((p) => p.id === project);
  }

  return projectData;
}