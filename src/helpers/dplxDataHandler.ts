import { commandHandler } from './commandHandler';

export const onDataHandler = (dplx) => {
  return async (chunk) => {
    try {
      console.log(chunk);
      const [command, ...restCoordinate] = chunk.split(' ');
      const handleCommand = await commandHandler(command, restCoordinate);
      dplx.write(`${command}`);
    } catch {
      console.log('Error in onDataHandler catch');
      dplx.write('Error in onDataHandler catch');
    }
  };
};
