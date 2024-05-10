import { HttpResponse, http } from 'msw';

export const authHandlers = [
  http.get('/auth/kakao', () => {
    console.log('authHandler Working...');
    return HttpResponse.json(
      {
        accessToken:
          'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjk4NTA1NzM2LCJleHAiOjE2OTg1MDU4NTZ9.E0p1V4PiBDmZIZqglGjQFWh-bgbA7n7qryYnOZ3cxMuaBvp-ejkXC2b-bA5kDjZrlzyyiWuTwe-sbYk73tIR0w',
        refreshToken:
          'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2OTg1MDU3MzYsImV4cCI6MTY5ODUwNjczNn0.GIybXCnow3xx7B6phYfSqvpVV2GB9ieos7t-ciGSCEJMIZqeEk9DcJcLsfHNUISTf4-xWTtnZ7_OVR9WAm3AfA',
        id: 1,
        nickname: '창현',
        profileImageUrl: 'https://picsum.photos/200',
        email: 'changhyeon.h@kakao.com',
        oauthId: 32014123,
        oauthProvider: 'KAKAO',
        addressDepth1: '서울시',
        addressDepth2: '영등포구',
      },
      { status: 200 }
    );
  }),
];
