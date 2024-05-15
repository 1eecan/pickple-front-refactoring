import { HttpResponse, http } from 'msw';

import { mockChatData } from '@mocks/data/chat';

export const mockGetChatRoomDetails = http.get(
  '/api/rooms/:roomId',
  ({ params }) => {
    const { roomId } = params;

    const { getChatRoomDetails: mockData } = mockChatData;

    if (roomId === '2') {
      return HttpResponse.json(mockData, {
        status: 200,
      });
    }
  }
);
