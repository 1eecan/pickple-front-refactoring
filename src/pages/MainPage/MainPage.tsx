import { Header } from '@components/Header';

import { MainPageContainer } from './MainPage.style';
import CrewRanking from './components/CrewRanking';
import NearGame from './components/NearGame';
import RecommendCrew from './components/RecommendCrew';
import { MainPageProvider } from './hooks/MainPageProvider';

export const MainPage = () => {
  return (
    <MainPageProvider>
      <MainPageContainer>
        <Header isLogo={true} />
        <NearGame />
        <CrewRanking />
        <RecommendCrew />
      </MainPageContainer>
    </MainPageProvider>
  );
};
