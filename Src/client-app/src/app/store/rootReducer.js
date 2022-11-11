import { combineReducers } from '@reduxjs/toolkit';
import dash from './common';
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
import mapInfoReducer from 'src/app/main/apps/reference/map-info/store/mapInfoSlice';
import mapInfosReducer from 'src/app/main/apps/reference/map-info/store/mapInfosSlice';
import companyReducer from 'src/app/main/apps/reference/company/store/CompanySlice';
import companiesReducer from 'src/app/main/apps/reference/company/store/CompaniesSlice';
import employeeRateReducer from 'src/app/main/apps/reference/employee-rates/store/employeeRateSlice';
import employeeRatesReducer from 'src/app/main/apps/reference/employee-rates/store/employeeRatesSlice';
import exchangeRateReducer from 'src/app/main/apps/reference/exchange-rates/store/exchangeRateSlice';
import exchangeRatesReducer from 'src/app/main/apps/reference/exchange-rates/store/exchangeRatesSlice';
import glcReducer from 'src/app/main/apps/reference/glc/store/glcSlice';
import glcsReducer from 'src/app/main/apps/reference/glc/store/glcsSlice';


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
    mapInfo: mapInfoReducer,
    mapInfos: mapInfosReducer,
    company: companyReducer,
    companies: companiesReducer,
    employeeRate: employeeRateReducer,
    employeeRates: employeeRatesReducer,
    exchangeRate: exchangeRateReducer,
    exchangeRates: exchangeRatesReducer,
    glc: glcReducer,
    glcs: glcsReducer,
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
