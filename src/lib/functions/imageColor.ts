export const getAverageRGB = (img: HTMLImageElement): string => {

  const defaultRGB = "0,0,0"; // for non-supporting envs

  const canvas = document.createElement('canvas');
  const context = canvas.getContext?.('2d');

  if (!context) {
    return defaultRGB;
  }

  const height = canvas.height = img.naturalHeight || img.offsetHeight || img.height;
  const width = canvas.width = img.naturalWidth || img.offsetWidth || img.width;

  context.drawImage(img, 0, 0);

  let data;
  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
      /* security error, img on diff domain */alert('image is on a different domain, cannot read! (Check CORS)');
    return defaultRGB;
  }

  const blockSize = 5; // only visit every 5 pixels
  const length = data.data.length;
  let count = 0;
  const rgb = { r: 0, g: 0, b: 0 };
  for (let i = 0; i < length; i += blockSize * 4) {
    count++;
    rgb.r += data.data[i];
    rgb.g += data.data[i + 1];
    rgb.b += data.data[i + 2];
  }

  // ~~ used to floor values
  rgb.r = ~~(rgb.r / count);
  rgb.g = ~~(rgb.g / count);
  rgb.b = ~~(rgb.b / count);

  return rgb.r + "," + rgb.g + "," + rgb.b;
}