import React from 'react';
import PropTypes from 'prop-types';
import {Label} from "components/atoms/Label/Label";
import {Input} from "components/atoms/Input/Input";
import {Wrapper} from "./FormFields.styles";

const FormField  = ({onChange, value, label, name,  id, type ='text', ...props}) => {

    return(
        <Wrapper>
            <Label htmlFor={id}>{label}</Label>
            <Input name={name} id={id} type={type} value={value} onChange={onChange} />
        </Wrapper>
    );
};


FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
}

export default FormField;
