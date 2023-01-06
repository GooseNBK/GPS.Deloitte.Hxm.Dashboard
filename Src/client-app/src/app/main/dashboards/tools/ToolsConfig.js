import { lazy } from 'react';

const Tools = lazy(() => import('./Tools'));

const ToolsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/tools',
      element: <Tools />,
    },
  ],
};

export default ToolsConfig;
