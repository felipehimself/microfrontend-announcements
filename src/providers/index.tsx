import React, { Suspense, useEffect, useState } from 'react';
import { Fallback } from '@/components/shared/fallback';
import { ErrorBoundary } from 'react-error-boundary';
import { FallbackError } from '@/components/shared/fallback-error';
import { BrowserRouter } from 'react-router-dom';
import { darkTheme, lightTheme } from '@mfe-lib/styleguide';
import { FluentProvider } from '@fluentui/react-components';

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const theme = localStorage.getItem('mfe-theme') as 'light' | 'dark';

    if (theme) {
      setCurrentTheme(theme);
    }

    window.addEventListener('mfe-theme', (event) => {
      const customEvent = event as CustomEvent<{ theme: 'light' | 'dark' }>;

      setCurrentTheme(customEvent.detail.theme);
    });

    return () => {
      window.removeEventListener('mfe-theme', (event) => {
        console.log(event);
      });
    };
  }, []);

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
