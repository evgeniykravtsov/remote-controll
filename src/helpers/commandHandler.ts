import { makeCircle } from './makeCircle';
import { makeRectangle } from './makeRectangle';
import { makePrintScreen } from './makePrintScreen';

import * as robot from 'robotjs';

export const commandHandler = async (command: string, coordinate: string[]) => {
  const { x, y } = robot.getMousePos();
  const numberCoordinate = Number(coordinate[0]);
  switch (command) {
    case 'mouse_up':
      robot.moveMouseSmooth(x, y - numberCoordinate);
      break;
    case 'mouse_down':
      robot.moveMouseSmooth(x, y + numberCoordinate);
      break;
    case 'mouse_left':
      robot.moveMouseSmooth(x - numberCoordinate, y);
      break;
    case 'mouse_right':
      robot.moveMouseSmooth(x + numberCoordinate, y);
      break;
    case 'draw_rectangle':
      makeRectangle(x, y, [numberCoordinate, Number(coordinate[1])]);
      break;
    case 'draw_circle':
      makeCircle(x, y, numberCoordinate);
      break;
    case 'draw_square':
      makeRectangle(x, y, [numberCoordinate, numberCoordinate]);
      break;
    case 'prnt_scrn':
      const screen = await makePrintScreen(x, y, 200);
      return screen;
    default:
      return 'Not found this command!';
  }
  return '';
};
