import React from 'react';
import { PropsWithChildren } from 'react';
// import { Helmet } from 'react-helmet-async';

export const AppLayout: React.FC<PropsWithChildren> = React.memo(
  ({ children }) => {
    return (
      <>
        {/* <Helmet title="Dashboard">
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="dashboard/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="dashboard/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="dashboard/favicon-16x16.png"
        />
        <link rel="manifest" href="dashboard/site.webmanifest" />
        <link rel="stylesheet" href="src/global.css" />
      </Helmet> */}

        <main>{children}</main>
      </>
    );
  }
);
