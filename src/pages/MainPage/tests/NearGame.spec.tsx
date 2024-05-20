import '@testing-library/jest-dom';
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { PATH_NAME } from '@constants/pathName';

import { mockRender } from '@tests/mockRender';

import { games } from '@mocks/data/game';

import NearGame from '../components/NearGame';
import { MainPageProvider } from '../hooks/MainPageProvider';

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

describe('NearGameComponent With No GameData', () => {
  it('NearGame컴포넌트에서 경기가 없을 경우 게스트 모집 버튼이 보인다.', async () => {
    await mockRender(<NearGame />);

    const button = screen.getByRole('button', { name: '게스트 모집하기' });

    expect(button).toBeInTheDocument();
  });

  it('NearGame컴포넌트에서 경기가 없을 경우 게스트 모집 버튼을 누르게 되고, /create/game 페이지로 이동', async () => {
    const { getByText } = await mockRender(<NearGame />);
    await userEvent.click(getByText('게스트 모집하기'));

    expect(navigateFn).toHaveBeenCalledWith(PATH_NAME.CREATE_GAME);
  });
});

describe('NearGameComponent With GameData', () => {
  it('NearGame컴포넌트에서 경기가 있을 경우 경기 카드가 보인다.', async () => {
    await mockRender(<NearGame />, { wrapper: MainPageProvider });

    const MatchItems = await screen.findAllByTestId('match-item');

    MatchItems.forEach((el, index) => {
      const MatchItem = within(el);
      const game = games[index];

      //expect(MatchItem.getByText(game.playDate)).toBeInTheDocument();
      expect(MatchItem.getByText(game.mainAddress)).toBeInTheDocument();
      expect(MatchItem.getByText('종료')).toBeInTheDocument();
      //TODO: Avatar 검증
    });
  });
  it('NearGame컴포넌트에서 경기 카드를 누르면 해당 경기로 이동한다.', async () => {
    await mockRender(<NearGame />, { wrapper: MainPageProvider });

    const MatchItems = await screen.findAllByTestId('match-item');

    await userEvent.click(MatchItems[0]);

    expect(navigateFn).toHaveBeenCalledWith(
      PATH_NAME.GET_GAMES_PATH(String(games[0].id))
    );
  });
});
