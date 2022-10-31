import { lazy } from 'react';

const InterfaceExecution = lazy(() => import('./interface-execution/InterfaceExecution'));
const InterfaceExecutionStatus = lazy(() => import('./interface-execution-status/InterfaceExecutionStatus'));
const InterfacesConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'apps/interfaces/interface-execution',
      element: <InterfaceExecution />,
    },
    {
      path: 'apps/interfaces/interface-execution-status',
      element: <InterfaceExecutionStatus />,
    },
  ],
};

export default InterfacesConfig;