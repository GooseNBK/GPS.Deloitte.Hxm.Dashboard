import { lazy } from 'react';

const SuccessFactors = lazy(() => import('./success-factors/SuccessFactors'));
const EmployeeStaging = lazy(() => import('./emp-stg/EmployeeStaging'));
const EmployeeStagingHistoric = lazy(() => import('./emp-stg-hist/EmployeeStagingHistoric'));
const BaseConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'apps/base/success-factors',
      element: <SuccessFactors />,
    },
    {
      path: 'apps/base/employee-staging',
      element: <EmployeeStaging />,
    },
    {
      path: 'apps/base/employee-staging-historic',
      element: <EmployeeStagingHistoric />,
    }
  ],
};

export default BaseConfig;