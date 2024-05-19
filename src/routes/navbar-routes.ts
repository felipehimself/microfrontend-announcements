export type TRoutes = {
  submenuName?: string;
  path: string;
};

export type TAppRoutes = {
  appName: string;
  path: string;
  appIcon?: string;
  routes: TRoutes[];
};

export const MfeNavRoutes: TAppRoutes = {
  appName: 'Announcements',
  path: 'announcements',
  appIcon: '/streaming/streaming-nav-icon.svg',
  routes: [],
};
