export function addAndRemoveClass(element: HTMLElement, add: string, remove: string) {
  element.classList.add(add);
  element.classList.remove(remove);
}
export function getElements(model: string, containerId: string) {
  const modelCanvas = document.getElementById(`${model}-scene`);
  const text = document.getElementById(`${containerId}-div`);
  return { modelCanvas, text };
}
export const onMouseEnter = (model: string, containerId: string) => {
  const { modelCanvas, text } = getElements(model, containerId);
  if (!modelCanvas || !text) return;
  addAndRemoveClass(modelCanvas, 'w-full', 'w-1/2');
  text.classList.add('hidden');
};
export const onMouseLeave = (model: string, containerId: string) => {
  const { modelCanvas, text } = getElements(model, containerId);
  if (!modelCanvas || !text) return;
  addAndRemoveClass(modelCanvas, 'w-1/2', 'w-full');
  addAndRemoveClass(text, 'display', 'hidden');
};