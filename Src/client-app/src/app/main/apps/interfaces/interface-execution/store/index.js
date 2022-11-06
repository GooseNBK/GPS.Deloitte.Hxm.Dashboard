import { combineReducers } from '@reduxjs/toolkit';
import interfaceSetup from './interfaceSlice';
import interfaceSetups from './interfacesSlice';

const reducer = combineReducers({
    interfaceSetups,
    interfaceSetup,
});

export default reducer;
