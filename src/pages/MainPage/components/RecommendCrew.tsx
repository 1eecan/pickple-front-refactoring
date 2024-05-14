import { Button } from '@components/shared/Button';
import { Text } from '@components/shared/Text';

import { PATH_NAME } from '@constants/pathName';

import { MainPageSubContainer } from '../MainPage.style';
import { MainPageNoContentItem } from './MainPageNoContentItem';

const RecommendCrew = ({
  filteredCrewData,
  navigate,
  MAIN_PAGE_BUTTON_PROP,
}) => {
  return (
    <MainPageSubContainer>
      <Text children={'추천 크루'} weight={700} size={'1.25rem'} />
      {filteredCrewData.length === 0 ? (
        <MainPageNoContentItem
          name={'CREW'}
          onClick={() => navigate(PATH_NAME.CREATE_CREW)}
        />
      ) : (
        filteredCrewData
      )}
      {filteredCrewData.length !== 0 && (
        <Button
          {...MAIN_PAGE_BUTTON_PROP}
          onClick={() => navigate(PATH_NAME.CREWS_RECOMMEND)}
        >
          더보기
        </Button>
      )}
    </MainPageSubContainer>
  );
};

export default RecommendCrew;
