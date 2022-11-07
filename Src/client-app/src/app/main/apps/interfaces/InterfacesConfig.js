import { lazy } from 'react';

const InterfaceExecution = lazy(() => import('./interface-execution/InterfaceExecution'));
const InterfaceExecutionStatus = lazy(() => import('./interface-execution-status/InterfaceExecutionStatus'));
const InterfaceExecutionStatusDetail = lazy(() => import('./interface-execution-status/interface-execution-status-details/InterfaceExecutionStatusDetail'));
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
    {
      path: 'apps/interfaces/interface-execution-status/:processExecutionId/*',
      element: <InterfaceExecutionStatusDetail />,
    },
  ],
};

export default InterfacesConfig;