import { lazy } from 'react';

const InterfaceDashboardApp = lazy(() => import('./InterfaceDashboardApp'));

const InterfaceDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/interface',
      element: <InterfaceDashboardApp />,
    },
  ],
};

export default InterfaceDashboardAppConfig;
