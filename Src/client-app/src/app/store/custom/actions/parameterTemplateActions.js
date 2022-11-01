import {ActionTypes} from '../constants/action-types';
export const setParameterTemplates = (parameterTemplates) => {
    return {
        type : ActionTypes.SET_PARAMETER_TEMPLATES,
        payload: parameterTemplates,
    }
}

export const selectedParameterTemplate = (parameterTemplate) => {
    return {
        type : ActionTypes.SELECTED_PARAMETER_TEMPLATE,
        payload: parameterTemplate,
    }
}