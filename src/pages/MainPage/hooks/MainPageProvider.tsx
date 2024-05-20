import { ReactNode, createContext } from 'react';

import { EmotionJSX } from 'node_modules/@emotion/react/types/jsx-namespace';

import { CrewRank } from '@type/models/CrewRank';

import {
  MAIN_PAGE_BUTTON_PROP,
  MAIN_PAGE_BUTTON_PROP_TYPE,
} from '../MainPage.style';
import { useMainPage } from './useMainPage';

type MAIN_PAGE_PROP_TYPE = {
  slicedCrewsRanking: CrewRank[];
  filteredGameData: EmotionJSX.Element[];
  filteredCrewData: EmotionJSX.Element[];
  MAIN_PAGE_BUTTON_PROP: MAIN_PAGE_BUTTON_PROP_TYPE;
};
export const MainPageContext = createContext<MAIN_PAGE_PROP_TYPE>({
  slicedCrewsRanking: [],
  filteredGameData: [],
  filteredCrewData: [],
  MAIN_PAGE_BUTTON_PROP: MAIN_PAGE_BUTTON_PROP,
});

export const MainPageProvider = ({ children }: { children: ReactNode }) => {
  const { slicedCrewsRanking, filteredGameData, filteredCrewData } =
    useMainPage();

  const value = {
    slicedCrewsRanking,
    filteredGameData,
    filteredCrewData,
    MAIN_PAGE_BUTTON_PROP,
  };

  return (
    <MainPageContext.Provider value={value}>
      {children}
    </MainPageContext.Provider>
  );
};
