import  {useReducer} from 'react';

const actionTypes = {
    inputChange: 'INPUT_CHANGE',
    clearValues: 'CLEAR_VALUES',
    consentToggle: 'CONSENT_TOGGLE',
    throwError: 'THROW_ERROR',
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.inputChange:
            return {
                ...state,
                [action.field]: action.value,
            };
        case actionTypes.clearValues:
            return {
                ...action.initialValues
            };
        case actionTypes.consentToggle:
            return {
                ...state,
                potwierdz: !state.potwierdz,
            };
        case actionTypes.throwError:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};

export const useForm = (initialValues) => {
    const [formValue, dispatch] = useReducer(reducer, initialValues);

    const handleInputChange = (e) => {
        dispatch({
            type: actionTypes.inputChange,
            field: e.target.name,
            value: e.target.value,
        })
    };

    const handleClearForm = () => {
        dispatch({
            type: actionTypes.clearValues,
            initialValues
        })
    };

    const handleThrowError = (errorMessage) => {
        dispatch({
            type: actionTypes.throwError,
            error: errorMessage,
        })
    };

    const handleConsentToggle = () => {
        dispatch({
            type: actionTypes.consentToggle
        })
    };

    return{
        formValue,
        handleInputChange,
        handleClearForm,
        handleThrowError,
        handleConsentToggle,
    }
};