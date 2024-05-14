import { Header } from '@components/Header';

import { theme } from '@styles/theme';

import { MainPageContainer } from './MainPage.style';
import CrewRanking from './components/CrewRanking';
import NearGame from './components/NearGame';
import RecommendCrew from './components/RecommendCrew';
import { useMainPage } from './hooks/useMainPage';

export const MainPage = () => {
  const { navigate, slicedCrewsRanking, filteredGameData, filteredCrewData } =
    useMainPage();

  const nearGameProps = { filteredGameData, navigate, MAIN_PAGE_BUTTON_PROP };
  const crewRankingProps = {
    slicedCrewsRanking,
    navigate,
    MAIN_PAGE_BUTTON_PROP,
  };
  const recommendCrewProps = {
    filteredCrewData,
    navigate,
    MAIN_PAGE_BUTTON_PROP,
  };
  return (
    <MainPageContainer>
      <Header isLogo={true} />
      <NearGame {...nearGameProps} />
      <CrewRanking {...crewRankingProps} />
      <RecommendCrew {...recommendCrewProps} />
    </MainPageContainer>
  );
};

const MAIN_PAGE_BUTTON_PROP = {
  width: '100%',
  height: '2.5rem',
  fontSize: `${theme.FONT_SIZE.MD}`,
  fontWeight: theme.FONT_WEIGHT.BOLD,
  lineHeight: 0,
  textColor: `${theme.PALETTE.RED_400}`,
  borderColor: `${theme.PALETTE.RED_400}`,
  backgroundColor: 'white',
};
