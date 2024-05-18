import { ReactElement, ReactNode } from 'react';

import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';

import { theme } from '@styles/theme';

const queryClient = new QueryClient();

interface MockRenderOptions {
  wrapper?: React.FC<{ children: ReactNode }>;
}

export const mockRender = (
  component: ReactElement,
  options?: MockRenderOptions
) => {
  const { wrapper: PageProvider } = options || {};

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        {PageProvider ? <PageProvider>{children}</PageProvider> : children}
      </ThemeProvider>
    </QueryClientProvider>
  );

  return render(component, { wrapper: Wrapper });
};
