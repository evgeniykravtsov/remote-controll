import { WebSocketServer, createWebSocketStream } from 'ws';
import { onDataHandler } from './helpers/dplxDataHandler';
import 'dotenv/config';

const wss = new WebSocketServer({ port: process.env.PORT || 8080 });

wss.on('connection', function connection(ws) {
  const dplx = createWebSocketStream(ws, {
    decodeStrings: false,
    encoding: 'utf-8',
  });

  dplx.on('data', onDataHandler(dplx));
});

process.on('SIGINT', () => {
  wss.close();
  console.log('WebSocket is closed');
  process.exit();
});

wss.on('close', () => {
  console.log('WebSocket is closed');
});
