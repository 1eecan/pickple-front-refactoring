import '@testing-library/jest-dom';
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { PATH_NAME } from '@constants/pathName';

import { mockRender } from '@tests/mockRender';

import { CREW_RANKING } from '@mocks/data/ranking';

import CrewRanking from '../components/CrewRanking';
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

describe('CrewRanking Component With No CrewRankingData', () => {
  it('CrewRanking 컴포넌트에서 랭킹 데이터가 없을 경우 전체 크루 랭킹 보기 버튼만 보인다.', async () => {
    await mockRender(<CrewRanking />);

    const button = screen.getByRole('button', { name: '전체 크루 랭킹 보기' });
    const text = screen.queryByText('1');

    expect(button).toBeInTheDocument();
    expect(text).not.toBeInTheDocument();
  });

  it('CrewRanking 컴포넌트에서 랭킹 데이터가 없을 경우 전체 크루 랭킹 보기 버튼을 누르게 되고, /crews/ranking 페이지로 이동', async () => {
    const { getByText } = await mockRender(<CrewRanking />);
    await userEvent.click(getByText('전체 크루 랭킹 보기'));

    expect(navigateFn).toHaveBeenCalledWith(PATH_NAME.CREWS_RANKING);
  });
});

describe('CrewRanking Component With CrewRankingData', () => {
  it('CrewRanking 컴포넌트에서 랭킹 데이터가 있을 경우 크루 랭킹 카드가 보인다.', async () => {
    await mockRender(<CrewRanking />, { wrapper: MainPageProvider });

    const RankingItems = await screen.findAllByTestId('ranking-item');

    RankingItems.forEach((el, index) => {
      const RankingItem = within(el);
      const ranking = CREW_RANKING[index];

      expect(RankingItem.getByText(ranking.rank)).toBeInTheDocument();
      expect(RankingItem.getByText(ranking.name)).toBeInTheDocument();
      expect(
        RankingItem.getByText(ranking.totalScore.toLocaleString())
      ).toBeInTheDocument();
    });
  });
  it('CrewRanking 컴포넌트에서 크루 랭킹 카드를 누르면 해당 크루 상세페이지로 이동한다.', async () => {
    await mockRender(<CrewRanking />, { wrapper: MainPageProvider });

    const RankingItems = await screen.findAllByTestId('ranking-item');

    await userEvent.click(RankingItems[0]);

    expect(navigateFn).toHaveBeenCalledWith(
      PATH_NAME.GET_CREWS_PATH(String(CREW_RANKING[0].id))
    );
  });
});
