/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const { category } = params;

  switch (category) {
    case "web-apps":
      return { category: "Web apps" };
    case "games":
      return { category: "Games" };
    case "other-projects":
      return { category: "Other projects" };
    default:
      return { category: "404" };
  }
}