import { HttpResponse, http } from 'msw';

import { mockChatData } from '@mocks/data/chat';

export const mockGetAllChatRoomList = http.get('/api/rooms', ({ request }) => {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  const { getAllChatRoomList: mockData } = mockChatData;

  if (type === '개인') {
    return HttpResponse.json(mockData.personal, {
      status: 200,
    });
  } else if (type === '게스트') {
    return HttpResponse.json(mockData.guest, {
      status: 200,
    });
  } else if (type === '크루') {
    return HttpResponse.json(mockData.crew, {
      status: 200,
    });
  }
});
