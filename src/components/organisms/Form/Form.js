import React from 'react';
import {Wrapper, StyledTitle}  from "components/organisms/UsersList/UsersList.styles";
import FormField from "components/molecules/FormField/FormField";
import Button from "components/atoms/Button/Button";

const Form= ({handleAddUser, handleInputChange, formValue }) => {

    return(
        <>
            <Wrapper as="form" onSubmit={handleAddUser}>
                <StyledTitle>Dodaj studenta</StyledTitle>
                <FormField label="Name" name="imie" id="imie" value={formValue.imie} onChange={handleInputChange}/>
                <FormField label="Frekwencja" name="frekwencja" id="frekwencja" value={formValue.frekwencja} onChange={handleInputChange}/>
                <FormField label="Średnia" name="srednia" id="srednia" value={formValue.srednia} onChange={handleInputChange}/>
                <Button type="submit">Dodaj</Button>
            </Wrapper>
        </>
    );
};
export default Form;