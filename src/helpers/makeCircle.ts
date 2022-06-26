import { mouseToggle, dragMouse } from 'robotjs';

export const makeCircle = (x: number, y: number, radius: number): void => {
  mouseToggle('down');
  mouseToggle('down');

  for (let i = 0; i <= Math.PI * 2; i += 0.01) {
    const newX = x + radius * Math.cos(i) - radius;
    const newY = y + radius * Math.sin(i);
    dragMouse(newX, newY);
  }
  mouseToggle('up');
};
