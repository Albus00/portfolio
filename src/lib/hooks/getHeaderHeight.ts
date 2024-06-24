export default function getHeaderHeight(isMounted = true): number {
  // Return a default value if the component is not mounted
  if (!isMounted)
    return 88;

  const header = document.querySelector('header');
  if (!header) {
    console.error('Header not found. Make sure the header is rendered before calling this function (ex. onMount)');
    return 88;
  }
  const headerHeight = header.offsetHeight;
  return headerHeight;
}