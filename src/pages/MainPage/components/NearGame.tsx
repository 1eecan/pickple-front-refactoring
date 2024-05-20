import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@components/shared/Button';
import { Text } from '@components/shared/Text';

import { PATH_NAME } from '@constants/pathName';

import { MainPageSubContainer } from '../MainPage.style';
import { MainPageContext } from '../hooks/MainPageProvider';
import { MainPageNoContentItem } from './MainPageNoContentItem';

const NearGame = () => {
  const navigate = useNavigate();
  const { filteredGameData, MAIN_PAGE_BUTTON_PROP } =
    useContext(MainPageContext);

  return (
    <MainPageSubContainer>
      <Text children={'내 근처 게스트 매치'} weight={700} size={'1.25rem'} />
      {filteredGameData.length === 0 ? (
        <MainPageNoContentItem
          name={'GAME'}
          onClick={() => navigate(PATH_NAME.CREATE_GAME)}
        />
      ) : (
        filteredGameData
      )}
      {filteredGameData.length === 0 || filteredGameData.length === 1 ? (
        <Button
          {...MAIN_PAGE_BUTTON_PROP}
          onClick={() => navigate(PATH_NAME.MAP)}
        >
          다른 지역 게스트 매치 보러가기
        </Button>
      ) : (
        <Button
          {...MAIN_PAGE_BUTTON_PROP}
          onClick={() => navigate(PATH_NAME.GAMES_NEAR)}
        >
          더보기
        </Button>
      )}
    </MainPageSubContainer>
  );
};

export default NearGame;
