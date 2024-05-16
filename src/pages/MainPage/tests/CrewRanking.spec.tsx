import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { PATH_NAME } from '@constants/pathName';

import { MAIN_PAGE_BUTTON_PROP } from '../MainPage.style';
import CrewRanking from '../components/CrewRanking';

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

describe('CrewRankingComponent', () => {
  it('CrewRanking컴포넌트에서 크루랭킹으로 아무것도 조회가 안되면 전체 크루 랭킹 보기 버튼을 누르고 /crew/ranking 페이지로 이동', async () => {
    const { getByText } = render(
      <CrewRanking
        slicedCrewsRanking={[]}
        navigate={navigateFn}
        MAIN_PAGE_BUTTON_PROP={MAIN_PAGE_BUTTON_PROP}
      />
    );
    await userEvent.click(getByText('전체 크루 랭킹 보기'));

    expect(navigateFn).toHaveBeenCalledWith(PATH_NAME.CREWS_RANKING);
  });
});
