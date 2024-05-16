import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { PATH_NAME } from '@constants/pathName';

import { MAIN_PAGE_BUTTON_PROP } from '../MainPage.style';
import RecommendCrew from '../components/RecommendCrew';

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

describe('RecommendCrewComponent', () => {
  it('RecommendCrew컴포넌트에서 추천크루가 없을 경우 크루 만들기 버튼을 누르게 되고, /create/crew 페이지로 이동', async () => {
    const { getByText } = render(
      <RecommendCrew
        filteredCrewData={[]}
        navigate={navigateFn}
        MAIN_PAGE_BUTTON_PROP={MAIN_PAGE_BUTTON_PROP}
      />
    );
    await userEvent.click(getByText('크루 만들기'));

    expect(navigateFn).toHaveBeenCalledWith(PATH_NAME.CREATE_CREW);
  });
});
