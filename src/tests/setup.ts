import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll } from 'vitest';
import { vi } from 'vitest';

import { server } from '@mocks/server';

beforeAll(() => server?.listen());
afterEach(() => {
  server?.resetHandlers();
  cleanup();
  vi.clearAllMocks();
});
afterAll(() => {
  vi.resetAllMocks();
  server?.close();
});

//vi.mock('zustand');

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
