import React from 'react';
import ReactDOMClient from 'react-dom/client';
import rootComponent from './app';
import singleSpaReact from 'single-spa-react';
import { MfeNavRoutes } from './routes/navbar-routes';

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent,

  errorBoundary(_, __, ___) {
    return <div>This renders when a catastrophic error occurs</div>;
  },
});

export const routes = MfeNavRoutes;
