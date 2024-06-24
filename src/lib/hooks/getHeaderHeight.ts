export default function getHeaderHeight(): number {
  const header = document.querySelector('header');

  if (!header) {
    console.error('Header not found! Make sure the header is rendered before calling this function (ex. onMount)');
    return 0;
  }
  const headerHeight = header.offsetHeight;
  return headerHeight;
}