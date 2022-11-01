import {ActionTypes} from "../constants/action-types";

const initialState ={
    parameterTemplates:[],
};

export const parameterTemplatesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PARAMETER_TEMPLATES:
            return {...state, parameterTemplates: payload};
        default:
            return state;
    }
}

export const selectedParameterTemplateReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PARAMETER_TEMPLATE:
            return {...state, ...payload};
        default:
            return state;
    }
}