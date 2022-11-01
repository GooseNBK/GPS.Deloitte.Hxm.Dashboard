import {ActionTypes} from '../constants/action-types';
export const setInterfaceSetups = (interfaceSetups) => {
    return {
        type : ActionTypes.SET_INTERFACE_SETUPS,
        payload: interfaceSetups,
    }
}

export const selectedInterfaceSetup = (interfaceSetup) => {
    return {
        type : ActionTypes.SELECTED_INTERFACE_SETUP,
        payload: interfaceSetup,
    }
}