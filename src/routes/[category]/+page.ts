/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const { category } = params;

  switch (category) {
    case "web-apps":
      return { category: "WEB APPS" };
    case "games":
      return { category: "GAMES" };
    case "other-projects":
      return { category: "OTHER PROJECTS" };
    default:
      return { category: "404" };
  }
}