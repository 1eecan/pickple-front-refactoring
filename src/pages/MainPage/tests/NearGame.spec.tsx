import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { PATH_NAME } from '@constants/pathName';

import { MAIN_PAGE_BUTTON_PROP } from '../MainPage.style';
import NearGame from '../components/NearGame';

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

describe('NearGameComponent', () => {
  it('NearGame컴포넌트에서 경기가 없을 경우 게스트 모집 버튼을 누르게 되고, /create/game 페이지로 이동', async () => {
    const { getByText } = render(
      <NearGame
        filteredGameData={[]}
        navigate={navigateFn}
        MAIN_PAGE_BUTTON_PROP={MAIN_PAGE_BUTTON_PROP}
      />
    );
    await userEvent.click(getByText('게스트 모집하기'));

    expect(navigateFn).toHaveBeenCalledWith(PATH_NAME.CREATE_GAME);
  });
});
