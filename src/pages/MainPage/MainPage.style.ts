import styled from '@emotion/styled';

import { theme } from '@styles/theme';

export const MainPageContainer = styled.div`
  width: 100%;
  margin-top: 0.6rem;
  ${({ theme }) => theme.STYLES.LAYOUT}
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
  min-height: 100dvh;
`;

export const MainPageSubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 1.25rem;
`;

export const MAIN_PAGE_BUTTON_PROP = {
  width: '100%',
  height: '2.5rem',
  fontSize: `${theme.FONT_SIZE.MD}`,
  fontWeight: theme.FONT_WEIGHT.BOLD,
  lineHeight: 0,
  textColor: `${theme.PALETTE.RED_400}`,
  borderColor: `${theme.PALETTE.RED_400}`,
  backgroundColor: 'white',
};

export type MAIN_PAGE_BUTTON_PROP_TYPE = {
  width: string;
  height: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
  textColor: string;
  borderColor: string;
  backgroundColor: string;
};
