import {ActionTypes} from "../constants/action-types";

const initialState ={
    interfaceSetups:[],
};

export const interfaceSetupsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_INTERFACE_SETUPS:
            return {...state, interfaceSetups: payload};
        default:
            return state;
    }
}

export const selectedInterfaceSetupsReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_INTERFACE_SETUP:
            return {...state, ...payload};
        default:
            return state;
    }
}