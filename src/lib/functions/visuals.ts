export const MD_SCREEN_THRESHOLD = 768; // https://tailwindcss.com/docs/responsive-design
export const LG_SCREEN_THRESHOLD = 1024; // https://tailwindcss.com/docs/responsive-design
export const isMidScreen = (windowWidth: number) => windowWidth >= MD_SCREEN_THRESHOLD;
export const isLargeScreen = (windowWidth: number) => windowWidth >= LG_SCREEN_THRESHOLD;

export const changeProject = (titleElement: HTMLElement | null, projectName: string, projectColor: string, colorBrightness: number, isReset: boolean = false) => {
  if (!titleElement) return;
  if (titleElement.innerHTML === projectName) return;
  console.log(titleElement.innerHTML, projectName);

  if (isReset) {
    document.documentElement.style.backgroundColor = `#F2F2F2`;
  } else {
    document.documentElement.style.backgroundColor = `rgba(${projectColor}, 0.5)`;
  }
  titleElement.classList.add('animate__fadeOut');
  setTimeout(() => {
    if (!titleElement) return;
    titleElement.style.color = colorBrightness > 200 ? '#000' : `rgb(${projectColor})`;
    titleElement.innerHTML = projectName;
    titleElement.classList.remove('animate__fadeOut');
    titleElement.classList.add('animate__fadeIn');
  }, 200);
};