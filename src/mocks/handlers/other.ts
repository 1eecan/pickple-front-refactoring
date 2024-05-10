import { HttpResponse, http } from 'msw';

import { POSITIONS } from '@mocks/data/other';

const mockGetPositions = http.get('/api/positions', () => {
  return HttpResponse.json(POSITIONS);
});

export const otherHandlers = [mockGetPositions];
