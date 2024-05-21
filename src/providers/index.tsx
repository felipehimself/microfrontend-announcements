import React, { Suspense, useState } from 'react';
import { Fallback } from '@/components/shared/fallback';
import { ErrorBoundary } from 'react-error-boundary';
import { FallbackError } from '@/components/shared/fallback-error';
import { BrowserRouter } from 'react-router-dom';
import { darkTheme, lightTheme } from '@mfe-lib/styleguide';
import { FluentProvider } from '@fluentui/react-components';

const themeChannel = new BroadcastChannel('theme');

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  themeChannel.onmessage = (event) => setCurrentTheme(event.data);

  return (
    <FluentProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <Suspense fallback={<Fallback />}>
        <ErrorBoundary FallbackComponent={FallbackError}>
          <BrowserRouter>{children}</BrowserRouter>
        </ErrorBoundary>
      </Suspense>
    </FluentProvider>
  );
};
