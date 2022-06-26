import * as robot from 'robotjs';

export const commandHandler = (command, coordinate) => {
  const { x, y } = robot.getMousePos();

  switch (command) {
    case 'mouse_up':
      robot.moveMouseSmooth(x, y - Number(coordinate[0]));
      break;
    case 'mouse_down':
      robot.moveMouseSmooth(x, y + Number(coordinate[0]));
      break;
    case 'mouse_left':
      robot.moveMouseSmooth(x - Number(coordinate[0]), y);
      break;
    case 'mouse_right':
      robot.moveMouseSmooth(x + Number(coordinate[0]), y);
      break;
  }
};
