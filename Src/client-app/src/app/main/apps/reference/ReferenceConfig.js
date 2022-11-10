import { lazy } from 'react';

const Company = lazy(() => import('./company/Company'));
const EmployeeRates = lazy(() => import('./employee-rates/EmployeeRates'));
const ExchangeRates = lazy(() => import('./exchange-rates/ExchangeRates'));
const Glc = lazy(() => import('./glc/Glc'));
const MapInfo = lazy(() => import('./map-info/MapInfo'));
const KendoBase = lazy(() => import('./kendo/KendoBase'));
const ReferenceConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'apps/reference/employee-rates',
      element: <EmployeeRates />,
    },
    {
      path: 'apps/reference/exchange-rates',
      element: <ExchangeRates />,
    },
    {
      path: 'apps/reference/glc',
      element: <Glc />,
    },
    {
      path: 'apps/reference/company',
      element: <Company />,
    },
    {
      path: 'apps/reference/map-info',
      element: <MapInfo />,
    },
    {
      path: 'apps/reference/kendo',
      element: <KendoBase />,
    },
  ],
};

export default ReferenceConfig;