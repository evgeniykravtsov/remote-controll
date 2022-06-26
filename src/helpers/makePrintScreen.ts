import Jimp from 'jimp';
import { screen } from 'robotjs';

export const makePrintScreen = async (
  x: number,
  y: number,
  size: number
): Promise<string> => {
  let robotImage = screen.capture(x, y, size, size);
  const jimp = new Jimp({
    data: robotImage.image,
    width: robotImage.width,
    height: robotImage.height,
  });

  let red, green, blue;
  robotImage.image.forEach((byte, i) => {
    switch (i % 4) {
      case 0:
        return (blue = byte);
      case 1:
        return (green = byte);
      case 2:
        return (red = byte);
      case 3:
        jimp.bitmap.data[i - 3] = red;
        jimp.bitmap.data[i - 2] = green;
        jimp.bitmap.data[i - 1] = blue;
        jimp.bitmap.data[i] = 255;
    }
  });
  const Image = await jimp.getBase64Async(Jimp.MIME_PNG);
  const base64 = Image.split(',')[1];
  return base64;
};