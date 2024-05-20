import { ReactElement, ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';

import { theme } from '@styles/theme';

const createQueryClient = () => new QueryClient();

interface MockRenderOptions {
  wrapper?: React.FC<{ children: ReactNode }>;
}

export const mockRender = async (
  component: ReactElement,
  options?: MockRenderOptions
) => {
  const { wrapper: PageProvider } = options || {};
  const queryClient = createQueryClient();

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <ErrorBoundary fallback={<div>Testing went wrong.</div>}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<div>Loading...</div>}>
            {PageProvider ? <PageProvider>{children}</PageProvider> : children}
          </Suspense>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );

  return render(component, { wrapper: Wrapper });
};
