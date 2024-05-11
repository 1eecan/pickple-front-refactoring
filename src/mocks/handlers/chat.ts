import { HttpResponse, http } from 'msw';

const mockGetAllChatRoomList = http.get('/api/rooms', ({ request }) => {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  if (type === '개인') {
    return HttpResponse.json(
      [
        {
          id: 1,
          roomName: '영주',
          roomIconImageUrl: 'https://picsum.photos/200',
          type: '개인',
          memberCount: 2,
          maxMemberCount: 2,
          playStartTime: null,
          playTimeMinutes: null,
          lastMessageContent: '영주님이 채팅방에 입장하셨습니다.',
          lastMessageCreatedAt: '2023-11-19T18:20:36',
          createdAt: '2023-11-19T18:20:36',
        },
        {
          id: 2,
          roomName: '재원짱짱맨',
          roomIconImageUrl: 'https://picsum.photos/200',
          type: '개인',
          memberCount: 2,
          maxMemberCount: 2,
          playStartTime: null,
          playTimeMinutes: null,
          lastMessageContent: '재원짱짱맨님이 채팅방에 입장하셨습니다.',
          lastMessageCreatedAt: '2023-11-19T18:30:24',
          createdAt: '2023-11-19T18:30:24',
        },
      ],
      { status: 200 }
    );
  } else if (type === '게스트') {
    return HttpResponse.json(
      [
        {
          id: 3,
          roomName: '창현',
          roomIconImageUrl: 'https://picsum.photos/200',
          type: '게스트',
          memberCount: 2,
          maxMemberCount: 2,
          playStartTime: null,
          playTimeMinutes: null,
          lastMessageContent: '창현님이 채팅방에 입장하셨습니다.',
          lastMessageCreatedAt: '2023-11-19T18:20:36',
          createdAt: '2023-11-19T18:20:36',
        },
        {
          id: 4,
          roomName: '현호',
          roomIconImageUrl: 'https://picsum.photos/200',
          type: '게스트',
          memberCount: 2,
          maxMemberCount: 2,
          playStartTime: null,
          playTimeMinutes: null,
          lastMessageContent: '현호님이 채팅방에 입장하셨습니다.',
          lastMessageCreatedAt: '2023-11-19T18:30:24',
          createdAt: '2023-11-19T18:30:24',
        },
      ],
      { status: 200 }
    );
  } else if (type === '크루') {
    return HttpResponse.json(
      [
        {
          id: 5,
          roomName: '준식',
          roomIconImageUrl: 'https://picsum.photos/200',
          type: '크루',
          memberCount: 2,
          maxMemberCount: 2,
          playStartTime: null,
          playTimeMinutes: null,
          lastMessageContent: '준식님이 채팅방에 입장하셨습니다.',
          lastMessageCreatedAt: '2023-11-19T18:20:36',
          createdAt: '2023-11-19T18:20:36',
        },
        {
          id: 6,
          roomName: '엄맨',
          roomIconImageUrl: 'https://picsum.photos/200',
          type: '크루',
          memberCount: 2,
          maxMemberCount: 2,
          playStartTime: null,
          playTimeMinutes: null,
          lastMessageContent: '엄맨님이 채팅방에 입장하셨습니다.',
          lastMessageCreatedAt: '2023-11-19T18:30:24',
          createdAt: '2023-11-19T18:30:24',
        },
      ],
      { status: 200 }
    );
  }
});

export const chatHandlers = [mockGetAllChatRoomList];
