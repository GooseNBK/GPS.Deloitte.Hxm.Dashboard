import { combineReducers } from '@reduxjs/toolkit';
import widgets from './interfaceSlice';

const reducer = combineReducers({
  widgets,
});

export default reducer;
