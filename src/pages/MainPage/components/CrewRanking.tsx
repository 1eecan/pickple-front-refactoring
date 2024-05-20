import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { RankingHeader } from '@pages/CrewsRankingPage/CrewsRankingPage.styles';
import { RankingItem } from '@pages/CrewsRankingPage/components/RankingItem';

import { Button } from '@components/shared/Button';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { PATH_NAME } from '@constants/pathName';

import { MainPageSubContainer } from '../MainPage.style';
import { MainPageContext } from '../hooks/MainPageProvider';

const CrewRanking = () => {
  const navigate = useNavigate();
  const { slicedCrewsRanking, MAIN_PAGE_BUTTON_PROP } =
    useContext(MainPageContext);
  return (
    <MainPageSubContainer>
      <Text children={'크루 랭킹'} weight={700} size={'1.25rem'} />
      <RankingHeader justify="space-between">
        <Flex gap={55}>
          <Text size={14} nowrap>
            순위
          </Text>
          <Text size={14} nowrap>
            크루 이름
          </Text>
        </Flex>
        <Text size={14} nowrap>
          점수
        </Text>
      </RankingHeader>
      {slicedCrewsRanking.map((crewRank) => (
        <RankingItem
          key={crewRank.id}
          rank={crewRank.rank}
          name={crewRank.name}
          profileImageUrl={crewRank.profileImageUrl}
          rating={crewRank.totalScore}
          onClick={() =>
            navigate(PATH_NAME.GET_CREWS_PATH(String(crewRank.id)))
          }
        />
      ))}
      <Button
        {...MAIN_PAGE_BUTTON_PROP}
        onClick={() => navigate(PATH_NAME.CREWS_RANKING)}
      >
        전체 크루 랭킹 보기
      </Button>
    </MainPageSubContainer>
  );
};

export default CrewRanking;
