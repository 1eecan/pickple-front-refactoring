import { HttpResponse, http } from 'msw';

import { LOCATIONS, POSITIONS } from '@mocks/data/other';

const mockGetPositions = http.get('/api/positions', () => {
  return HttpResponse.json(POSITIONS);
});

const mockGetLocations = http.get('/api/address', () => {
  return HttpResponse.json(LOCATIONS);
});

export const otherHandlers = [mockGetPositions, mockGetLocations];
