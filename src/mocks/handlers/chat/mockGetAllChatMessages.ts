import { HttpResponse, http } from 'msw';

import { mockChatData } from '@mocks/data/chat';

export const mockGetAllChatMessages = http.get(
  '/api/messages/rooms/:roomId',
  ({ params }) => {
    const { roomId } = params;

    const { getAllChatMessages: mockData } = mockChatData;

    if (roomId === '2') {
      return HttpResponse.json(mockData, {
        status: 200,
      });
    }
  }
);
