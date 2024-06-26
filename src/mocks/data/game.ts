import { Game, Member } from '@type/models';

export const games: Game[] = Array(100)
  .fill({
    id: 0,
    content: '같이 즐거운 게임 해요~',
    playDate: '2023-02-01',
    playStartTime: '11:30',
    playEndTime: '13:00',
    playTimeMinutes: 90,
    mainAddress: '서울 영등포구 도림동 254',
    detailAddress: '영등포 다목적 체육관 2층 201호',
    latitude: 37.5059593,
    longitude: 126.898151,
    status: '모집 중',
    viewCount: 100,
    cost: 0,
    memberCount: 3,
    maxMemberCount: 5,
    host: {
      id: 1,
      email: 'james123@pickple.kr',
      nickname: 'james123',
      introduction: '안녕하십니까. 제임스입니다. 아이고~ 사장님~~',
      profileImageUrl: 'https://picsum.photos/200',
      mannerScore: 21,
      mannerScoreCount: 30,
      addressDepth1: '서울시',
      addressDepth2: '강남구',
      positions: ['C', 'PF'],
    },
    addressDepth1: '서울시',
    addressDepth2: '영등포구',
    positions: ['C', 'PF'],
    members: [
      {
        id: 1,
        email: 'james123@pickple.kr',
        nickname: 'james123',
        introduction: '안녕하십니까. 제임스입니다. 아이고~ 사장님~~',
        profileImageUrl: 'https://picsum.photos/200',
        mannerScore: 21,
        mannerScoreCount: 30,
        addressDepth1: '서울시',
        addressDepth2: '강남구',
        positions: ['C', 'PF'],
      },
      {
        id: 2,
        email: 'james456@pickple.kr',
        nickname: 'james456',
        introduction: '안녕하십니까. 제임스456입니다. 아이고~ 사장님~~',
        profileImageUrl: 'https://picsum.photos/200',
        mannerScore: 26,
        mannerScoreCount: 30,
        addressDepth1: '서울시',
        addressDepth2: '강남구',
        positions: ['C'],
      },
    ],
  })
  .map((game: Game, index) => ({
    ...game,
    id: index + 1,
  }));

export const pendingMembers: Member[] = Array(5)
  .fill({
    id: 0,
    email: 'james123@pickple.kr',
    nickname: 'james123',
    introduction: '안녕하십니까. 제임스입니다. 아이고~ 사장님~~',
    profileImageUrl: 'https://picsum.photos/200',
    mannerScore: 21,
    mannerScoreCount: 30,
    addressDepth1: '서울시',
    addressDepth2: '강남구',
    positions: ['C', 'PF'],
  })
  .map((member: Member, index) => ({
    ...member,
    id: index + 1,
  }));

export const pendingMembersMap: Member[][] = Array(101)
  .fill(null)
  .map(() => pendingMembers);
