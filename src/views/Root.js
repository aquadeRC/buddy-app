import React, {useEffect, useState} from 'react';
import {users as userData} from 'data/users';
import UsersList from "components/organisms/UsersList/UsersList";
import Form from "components/organisms/Form/Form";
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "assets/styles/globalStyle";
import {theme} from "assets/styles/theme";
import {Wrapper} from "./Root.styles";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const initialFormState ={
    imie:'',
    frekwencja:'',
    srednia:''
}

const mockApi =(succes) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(userData){
                resolve([...userData]);
            } else {
                reject({message:'Error'});
            }
        }, 2000);
    });
}


const Root = () => {
    const [usersList, setUsersList] = useState([]);
    const [formValue, setFormValues] = useState(initialFormState);


    useEffect(() =>{
        mockApi(true)
            .then((data)=>{
                setUsersList(data)
            });
        return () => {}
    },[])

    const deleteUser =(name)=>{
        const filteredUsers = usersList.filter(user => user.imie !== name);
        setUsersList(filteredUsers);
    }

    const handleInputChange = (e) => {
        setFormValues({
            ...formValue,
            [e.target.name]: e.target.value,
        })
    }

    const handleAddUser = (e) => {
        e.preventDefault();

        const newUser ={
            imie: formValue.imie,
            frekwencja: formValue.frekwencja,
            srednia: formValue.srednia,
        }

        setUsersList( [...usersList, newUser]);
        setFormValues(initialFormState);
    }

    return(
    <Router>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Wrapper>
                <nav>
                    <Link to="/">Home</Link>

                    <Link to="/add-user">Dodaj uzytkownika</Link>
                </nav>
                <Routes>
                    <Route path="/" element={ <UsersList deleteUser={deleteUser} usersList={usersList}/>}/>
                    <Route path="/add-user" element={<Form formValue={formValue} handleInputChange={handleInputChange} handleAddUser={handleAddUser}/>}/>

                </Routes>
            </Wrapper>
        </ThemeProvider>
    </Router>
    );
};

export default Root;