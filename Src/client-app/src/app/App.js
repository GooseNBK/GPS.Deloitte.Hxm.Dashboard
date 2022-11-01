import '@mock-api';
import BrowserRouter from 'src/BaseTemplate/core/BrowserRouter';
import Layout from 'src/BaseTemplate/core/Layout';
import Theme from 'src/BaseTemplate/core/Theme';
import { SnackbarProvider } from 'notistack';
import { useSelector } from 'react-redux';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { selectCurrentLanguageDirection } from 'app/store/i18nSlice';
import { selectUser } from 'app/store/userSlice';
import themeLayouts from 'app/theme-layouts/themeLayouts';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import Authorization from 'src/BaseTemplate/core/Authorization';
import settingsConfig from 'app/configs/settingsConfig';
import withAppProviders from './withAppProviders';
import { AuthProvider } from './auth/AuthContext';
import store from "./store/index";
import * as _redux from "./store";

import axios from 'axios';
// /**
//  * Axios HTTP Request defaults
//  */
// axios.defaults.baseURL = "";
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

var url = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = url;

const emotionCacheOptions = {
  rtl: {
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
    insertionPoint: document.getElementById('emotion-insertion-point'),
  },
  ltr: {
    key: 'muiltr',
    stylisPlugins: [],
    insertionPoint: document.getElementById('emotion-insertion-point'),
  },
};

//_redux.setupAxios(axios, store);

const App = () => {
  const user = useSelector(selectUser);
  const langDirection = useSelector(selectCurrentLanguageDirection);
  const mainTheme = useSelector(selectMainTheme);

  return (
    <CacheProvider value={createCache(emotionCacheOptions[langDirection])}>
      <Theme theme={mainTheme} direction={langDirection}>
        <AuthProvider>
          <BrowserRouter>
            <Authorization
              userRole={user.role}
              loginRedirectUrl={settingsConfig.loginRedirectUrl}
            >
              <SnackbarProvider
                maxSnack={5}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                classes={{
                  containerRoot: 'bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99',
                }}
              >
                <Layout layouts={themeLayouts} />
              </SnackbarProvider>
            </Authorization>
          </BrowserRouter>
        </AuthProvider>
      </Theme>
    </CacheProvider>
  );
};

export default withAppProviders(App)();
