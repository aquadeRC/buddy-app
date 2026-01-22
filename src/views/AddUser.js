import React, {useContext, useState} from 'react';
import { UserShape } from 'types';
import FormField from "components/molecules/FormField/FormField";
import Button from "components/atoms/Button/Button";
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import  {UserContext } from "Providers/UserProvider";


const initialFormState ={
    imie:'',
    frekwencja:'',
    srednia:''
}

const AddUser= () => {
    const [formValue, setFormValues] = useState(initialFormState);
    const {handleAddUser} = useContext(UserContext);

    const handleInputChange = (e) => {
        setFormValues({
            ...formValue,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmitUser = (e) =>{
        e.preventDefault();
        handleAddUser(formValue);

        setFormValues(initialFormState);
    }

    return(
            <ViewWrapper as="form" onSubmit={handleSubmitUser}>
                <Title>Dodawanie studenta</Title>
                <FormField label="Name" name="imie" id="imie" value={formValue.imie} onChange={handleInputChange}/>
                <FormField label="Frekwencja" name="frekwencja" id="frekwencja" value={formValue.frekwencja} onChange={handleInputChange}/>
                <FormField label="Średnia" name="srednia" id="srednia" value={formValue.srednia} onChange={handleInputChange}/>
                <Button type="submit">Dodaj</Button>
            </ViewWrapper>
    );
};

export default AddUser;