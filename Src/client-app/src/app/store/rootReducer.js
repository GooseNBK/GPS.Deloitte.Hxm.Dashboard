import { combineReducers } from '@reduxjs/toolkit';
import dash from './fuse';
import i18n from './i18nSlice';
import user from './userSlice';
import interfaceReducer from 'src/app/main/apps/interfaces/interface-execution/store/interfaceSlice';
import interfacesReducer from 'src/app/main/apps/interfaces/interface-execution/store/interfacesSlice';

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    dash,
    i18n,
    user,
    interface: interfaceReducer,
    interfaces: interfacesReducer,
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
