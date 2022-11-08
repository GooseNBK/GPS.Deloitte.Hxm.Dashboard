import { combineReducers } from '@reduxjs/toolkit';
import dash from './fuse';
import i18n from './i18nSlice';
import user from './userSlice';
import interfaceReducer from 'src/app/main/apps/interfaces/interface-execution/store/interfaceSlice';
import interfacesReducer from 'src/app/main/apps/interfaces/interface-execution/store/interfacesSlice';
import interfaceExecutionReducer from 'src/app/main/apps/interfaces/interface-execution-status/store/interfaceExecutionSlice';
import interfaceExecutionsReducer from 'src/app/main/apps/interfaces/interface-execution-status/store/interfaceExecutionsSlice';
import interfaceExecutionDetailsReducer from 'src/app/main/apps/interfaces/interface-execution-status/store/interfaceExecutionDetailsSlice';
import interfaceExecutionDetailErrorsReducer from 'src/app/main/apps/interfaces/interface-execution-status/store/interfaceExecutionDetailErrorsSlice';
import successFactorsReducer from 'src/app/main/apps/base/success-factors/store/successFactorsSlice';
import employeeStagingsReducer from 'src/app/main/apps/base/emp-stg/store/employeeStagingsSlice';
import employeeStagingHistoricsReducer from 'src/app/main/apps/base/emp-stg-hist/store/employeeStagingHistoricsSlice';
import employeeStagingHistoricErrorsSlice from 'src/app/main/apps/base/emp-stg-hist/store/employeeStagingHistoricErrorsSlice';

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    dash,
    i18n,
    user,
    interface: interfaceReducer,
    interfaces: interfacesReducer,
    interfaceExecution: interfaceExecutionReducer,
    interfaceExecutions: interfaceExecutionsReducer,
    interfaceExecutionDetails: interfaceExecutionDetailsReducer,
    interfaceExecutionDetailErrors: interfaceExecutionDetailErrorsReducer,
    successFactors: successFactorsReducer,
    employeeStagings: employeeStagingsReducer,
    employeeStagingHistorics: employeeStagingHistoricsReducer,
    employeeStagingHistoricErrors: employeeStagingHistoricErrorsSlice,
    ...asyncReducers,
  });

  /*
	Reset the redux store when user logged out
	 */
  if (action.type === 'user/userLoggedOut') {
    state = undefined;
  }

  return combinedReducer(state, action);
};

export default createReducer;
