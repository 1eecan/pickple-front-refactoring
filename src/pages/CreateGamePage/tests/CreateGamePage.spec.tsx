import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { beforeEach, describe, it, vi } from 'vitest';

import { mockRender } from '@tests/mockRender';
import {
  mockUseLoginInfoStore,
  mockUseTokenStore,
} from '@tests/mockZustandStore';

import { CreateGamePage } from '../CreateGamePage';

const navigateFn = vi.fn();

vi.mock('react-router-dom', async () => {
  const original =
    await vi.importActual<typeof import('react-router-dom')>(
      'react-router-dom'
    );
  return {
    ...original,
    useNavigate: () => navigateFn,
  };
});

vi.mock('zustand');

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = vi.fn();
  mockIntersectionObserver.mockReturnValue({
    disconnect: () => null,
    observe: () => null,
    takeRecords: () => null,
    unobserve: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
  //TODO: auth 데이터 추후 mock/data에 분리
  mockUseTokenStore({
    accessToken:
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjk4NTA1NzM2LCJleHAiOjE2OTg1MDU4NTZ9.E0p1V4PiBDmZIZqglGjQFWh-bgbA7n7qryYnOZ3cxMuaBvp-ejkXC2b-bA5kDjZrlzyyiWuTwe-sbYk73tIR0w',
  });
  mockUseLoginInfoStore({
    loginInfo: {
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
  });
});

describe('initial state of CreateGamePage', () => {
  it('CreateGamePage가 제대로 login된 상태로 접속되는지 확인', async () => {
    await mockRender(<CreateGamePage />);
    screen.debug();
  });
});
