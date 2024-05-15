import http from 'http';
import sockjs from 'sockjs';

const sockjsServer = sockjs.createServer();

sockjsServer.on('connection', (conn) => {
  let messageID = 0;

  const connectedFrame = [
    'CONNECTED',
    'version:1.1,1.0',
    'heart-beat:0,0',
    '',
    '\x00',
  ].join('\n');
  conn.write(connectedFrame);

  // https://blog.paimon.studio/54 참고
  const messageFrame = [
    'MESSAGE',
    'subscription:sub-0',
    `message-id:${String(messageID).padStart(3, '0')}`,
    'destination:/chat/2',
    'content-type:application/json',
    `content-length:${
      JSON.stringify({
        type: '대화',
        content: '안녕하세요!!',
        sender: {
          id: 2,
          nickname: '영주',
          profileImageUrl: 'https://picsum.photos/200',
        },
        roomId: 2,
        createdAt: '2023-11-20T16:41:19',
      }).length
    }`,
    '',
    JSON.stringify({
      type: '대화',
      content: '안녕하세요!!',
      sender: {
        id: 2,
        nickname: '영주',
        profileImageUrl: 'https://picsum.photos/200',
      },
      roomId: 2,
      createdAt: '2023-11-20T16:41:19',
    }),
    '\x00',
  ].join('\n');

  setTimeout(() => {
    conn.write(messageFrame);
  }, 1000);

  conn.on('data', (message) => {
    console.log('Received message from client:', message);

    if (message.substring(0, 4) === 'SEND') {
      const { content } = JSON.parse(
        `${message.split('\n').pop().replace('\x00', '')}`
      );
      const messageFrame = [
        'MESSAGE',
        'subscription:sub-0',
        `message-id:${String(++messageID).padStart(3, '0')}`,
        'destination:/chat/2',
        'content-type:application/json',
        `content-length:${
          JSON.stringify({
            type: '대화',
            content: `${content}`,
            sender: {
              id: 1,
              nickname: '창현',
              profileImageUrl: 'https://picsum.photos/200',
            },
            roomId: 2,
            createdAt: '2023-11-20T16:51:19',
          }).length
        }`,
        '',
        JSON.stringify({
          type: '대화',
          content: `${content}`,
          sender: {
            id: 1,
            nickname: '창현',
            profileImageUrl: 'https://picsum.photos/200',
          },
          roomId: 2,
          createdAt: '2023-11-20T16:51:19',
        }),
        '\x00',
      ].join('\n');

      conn.write(messageFrame);
    }
  });

  conn.on('close', () => {
    console.log('Connection closed');
  });
});

export const mockWebSocketListen = () => {
  const server = http.createServer();
  sockjsServer.installHandlers(server, { prefix: '/chat' });
  server.listen(5174, () => {
    console.log('SockJS server running on http://localhost:5174/chat');
  });

  return server;
};

export const mockWebSocketClose = (server) => {
  server.close(() => {
    console.log('Server has been stopped');
  });
};

mockWebSocketListen();
