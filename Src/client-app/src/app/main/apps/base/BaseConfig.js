import { lazy } from 'react';

const SuccessFactors = lazy(() => import('./success-factors/SuccessFactors'));
const BaseConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'apps/base/success-factors',
      element: <SuccessFactors />,
    }
  ],
};

export default BaseConfig;