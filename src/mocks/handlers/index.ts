import { testHandlers } from './apiTest';
import { authHandlers } from './auth';
import { chatHandlers } from './chat';
import { crewHandlers } from './crew';
import { gameHandlers } from './game';
import { memberHandlers } from './member';
import { otherHandlers } from './other';
import { rankingHandlers } from './ranking';

export const handlers = [
  ...authHandlers,
  ...testHandlers,
  ...gameHandlers,
  ...crewHandlers,
  ...memberHandlers,
  ...otherHandlers,
  ...rankingHandlers,
  ...chatHandlers,
];
