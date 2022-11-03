import { combineReducers } from '@reduxjs/toolkit';
import interfaces from './interfaceSlice';

const reducer = combineReducers({
    interfaces,
});

export default reducer;
