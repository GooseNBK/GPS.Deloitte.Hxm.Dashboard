import FuseUtils from 'src/baseComponents/utils';
import Loading from 'src/baseComponents/core/Loading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import SignInConfig from '../main/sign-in/SignInConfig';
import SignOutConfig from '../main/sign-out/SignOutConfig';
import dashboardsConfigs from '../main/dashboards/dashboardsConfigs';
import appsConfigs from '../main/apps/appsConfigs';
import pagesConfigs from '../main/pages/pagesConfigs';

const routeConfigs = [
  ...appsConfigs,
  ...dashboardsConfigs,
  ...pagesConfigs,
  SignOutConfig,
  SignInConfig,
];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
  {
    path: '/',
    element: <Navigate to="dashboards/analytics" />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: 'loading',
    element: <Loading />,
  },
  {
    path: '*',
    element: <Navigate to="pages/error/404" />,
  },
];

export default routes;
