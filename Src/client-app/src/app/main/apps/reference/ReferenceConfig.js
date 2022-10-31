import { lazy } from 'react';

const MapInfo = lazy(() => import('./map-info/MapInfo'));
const KendoBase = lazy(() => import('./kendo/KendoBase'));
const ReferenceConfig = {
  settings: {
    layout: {},
  },
  routes: [
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