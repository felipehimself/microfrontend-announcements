import { lazyImport } from '@/utils/lazy-import';
import { Suspense } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';
import { Fallback } from '@/components/shared/fallback';

import { AppLayout } from '@/components/layout';

const { AnnouncementsRoutes } = lazyImport(
  () => import('@/features/annoucements'),
  'AnnouncementsRoutes'
);

const App = () => {
  return (
    <AppLayout>
      <Suspense fallback={<Fallback />}>
        <Outlet />
      </Suspense>
    </AppLayout>
  );
};

export const AppRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'announcements/*',
        element: <AnnouncementsRoutes />,
      },
    ],
  },
];
