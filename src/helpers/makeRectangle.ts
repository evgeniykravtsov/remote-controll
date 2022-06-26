import * as robot from 'robotjs';

export const makeRectangle = (x: number, y: number, sides: number[]) => {
  robot.mouseToggle('down');
  robot.mouseToggle('down');
  robot.moveMouseSmooth(x + sides[0], y);

  robot.moveMouseSmooth(x + sides[0], y + sides[1]);
  robot.moveMouseSmooth(x, y + sides[1]);
  robot.moveMouseSmooth(x, y);
  robot.mouseToggle('up');
};
