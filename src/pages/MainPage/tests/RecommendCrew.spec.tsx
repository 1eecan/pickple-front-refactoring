import '@testing-library/jest-dom';
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { PATH_NAME } from '@constants/pathName';

import { mockRender } from '@tests/mockRender';

import { crews } from '@mocks/data/crew';

import RecommendCrew from '../components/RecommendCrew';
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

describe('RecommendCrew Component With No CrewData', () => {
  it('RecommendCrew 컴포넌트에서 크루가 없을 경우 크루 만들기 버튼이 보인다.', async () => {
    await mockRender(<RecommendCrew />);

    const button = screen.getByRole('button', { name: '크루 만들기' });

    expect(button).toBeInTheDocument();
  });

  it('RecommendCrew 컴포넌트에서 크루가 없을 경우 크루 만들기 버튼을 누르게 되고, /create/crew 페이지로 이동', async () => {
    const { getByText } = await mockRender(<RecommendCrew />);
    await userEvent.click(getByText('크루 만들기'));

    expect(navigateFn).toHaveBeenCalledWith(PATH_NAME.CREATE_CREW);
  });
});

describe('RecommendCrew Component With CrewData', () => {
  it('RecommendCrew 컴포넌트에서 크루가 있을 경우 크루 카드가 보인다.', async () => {
    await mockRender(<RecommendCrew />, { wrapper: MainPageProvider });

    const CrewItems = await screen.findAllByTestId('crew-item');

    CrewItems.forEach((el, index) => {
      const CrewItem = within(el);
      const crew = crews[index];

      expect(CrewItem.getByText(crew.name)).toBeInTheDocument();
      expect(
        CrewItem.getByText(crew.addressDepth1 + ' ' + crew.addressDepth2)
      ).toBeInTheDocument();
      expect(
        CrewItem.getByText(crew.memberCount + '/' + crew.maxMemberCount)
      ).toBeInTheDocument();
    });
  });
  it('RecommendCrew 컴포넌트에서 크루 카드를 누르면 해당 크루로 이동한다.', async () => {
    await mockRender(<RecommendCrew />, { wrapper: MainPageProvider });

    const CrewItems = await screen.findAllByTestId('crew-item');

    await userEvent.click(CrewItems[0]);

    expect(navigateFn).toHaveBeenCalledWith(
      PATH_NAME.GET_CREWS_PATH(String(crews[0].id))
    );
  });
});
