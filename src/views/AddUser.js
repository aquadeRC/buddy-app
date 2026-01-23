import React, {useContext} from 'react';
import FormField from "components/molecules/FormField/FormField";
import Button from "components/atoms/Button/Button";
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import  {UserContext } from "Providers/UserProvider";
import {useForm} from "hooks/useForm";


const initialFormState ={
    imie:'',
    frekwencja:'',
    srednia:'',
    potwierdz: false,
    error: '',
}
const AddUser= () => {
    const {handleAddUser} = useContext(UserContext);
    const {
        formValue,
        handleInputChange,
        handleClearForm,
        handleThrowError,
        handleConsentToggle,
    } = useForm(initialFormState);


    const handleSubmitUser = (e) => {
        e.preventDefault();
        if (formValue.potwierdz) {
            handleAddUser(formValue);
            handleClearForm(initialFormState);
        } else {
            handleThrowError('Musisz zaznaczyć potwierdzenie');
        }
    }

    return (
        <ViewWrapper as="form" onSubmit={handleSubmitUser}>
            <Title>Dodawanie studentow</Title>
            <FormField label="Name" name="imie" id="imie" value={formValue.imie} onChange={handleInputChange}/>
            <FormField label="Frekwencja" name="frekwencja" id="frekwencja" value={formValue.frekwencja}
                       onChange={handleInputChange}/>
            <FormField label="Średnia" name="srednia" id="srednia" value={formValue.srednia}
                       onChange={handleInputChange}/>
            <FormField label="Potwierdz" name="potwierdz" type="checkbox" id="potwierdz" value={formValue.potwierdz}
                       onChange={handleConsentToggle}/>
            <Button type="submit">Dodaj</Button>
            {formValue.error ? <p>{formValue.error}</p> : null}
        </ViewWrapper>
    );
};

export default AddUser;