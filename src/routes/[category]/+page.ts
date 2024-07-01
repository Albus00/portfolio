import { projects } from '$lib/data/projects';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const { category } = params;

  switch (category) {
    case "web-apps":
      return { category: "Web apps", projects: projects.webApps };
    case "games":
      return { category: "Games", projects: projects.games };
    case "other-projects":
      return { category: "Other projects", projects: projects.otherProjects };
    default:
      return { category: "404" };
  }
}