import React from 'react';
import PropTypes from 'prop-types';
import { UserShape } from 'types';
import FormField from "components/molecules/FormField/FormField";
import Button from "components/atoms/Button/Button";
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';

const AddUser= ({handleAddUser, handleInputChange, formValue }) => {

    return(
        <>
            <ViewWrapper as="form" onSubmit={handleAddUser}>
                <Title>Dodaj studenta</Title>
                <FormField label="Name" name="imie" id="imie" value={formValue.imie} onChange={handleInputChange}/>
                <FormField label="Frekwencja" name="frekwencja" id="frekwencja" value={formValue.frekwencja} onChange={handleInputChange}/>
                <FormField label="Średnia" name="srednia" id="srednia" value={formValue.srednia} onChange={handleInputChange}/>
                <Button type="submit">Dodaj</Button>
            </ViewWrapper>
        </>
    );
};

AddUser.propTypes = {
    handleAddUser:PropTypes.func.isRequired,
    formValues: PropTypes.shape(UserShape),
    handleInputChange:PropTypes.func.isRequired
};

export default AddUser;