import { combineReducers } from '@reduxjs/toolkit';
import fuse from './fuse';
import i18n from './i18nSlice';
import user from './userSlice';
import { parameterTemplatesReducer } from './custom/reducers/parameterTemplateReducer';
import { interfaceSetupsReducer, selectedInterfaceSetupsReducer } from './custom/reducers/interfaceSetupReducer';

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    fuse,
    i18n,
    user,
    parameterTemplatesReducer,
    interfaceSetups : interfaceSetupsReducer,
    interfaceSetup : selectedInterfaceSetupsReducer,
    ...asyncReducers,
  });

  /*
	Reset the redux store when user logged out
	 */
  if (action.type === 'user/userLoggedOut') {
    // state = undefined;
  }

  return combinedReducer(state, action);
};

export default createReducer;
