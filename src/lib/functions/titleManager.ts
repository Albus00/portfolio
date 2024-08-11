export const lockTitle = (titleId: string) => {
  const title = document.getElementById(titleId);
  if (!title) return;
  title.style.position = 'fixed';
  title.style.top = '0';
  title.style.left = '0';
};

export const unlockTitle = (titleId: string) => {
  const title = document.getElementById(titleId);
  if (!title) return;
  title.style.position = 'relative';
};