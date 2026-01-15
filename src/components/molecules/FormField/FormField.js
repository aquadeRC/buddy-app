import React from 'react';
import PropTypes from 'prop-types';
import {Label} from "components/atoms/Label/Label";
import {Input} from "components/atoms/Input/Input";
import {Wrapper} from "./FormFields.styles";

const FormField  = ({onChange, value, labelka, name,  id, typ ='text', ...props}) => {

    return(
        <Wrapper>
            <Label htmlFor={id}>{labelka}</Label>
            <Input imie={name} id={id} typ={typ} value={value} onChange={onChange} />
        </Wrapper>
    );
};


FormField.propTypes = {
labelka: PropTypes.string.isRequired,
    imie: PropTypes.string.isRequired,
    typ: PropTypes.string,
    id: PropTypes.string.isRequired,
}

export default FormField;
