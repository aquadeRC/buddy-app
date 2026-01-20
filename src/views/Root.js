import React, {useEffect, useState} from 'react';
import {users as userData} from 'data/users';
import AddUser from "views/AddUser";
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "assets/styles/globalStyle";
import {theme} from "assets/styles/theme";
import {Wrapper} from "./Root.styles";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import MainTemplate from "../components/templates/MainTemplate/MainTemplate";

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
            <MainTemplate>
            <Wrapper>
                <Routes>
                    <Route path="/add-user" element={<AddUser formValue={formValue} handleInputChange={handleInputChange} handleAddUser={handleAddUser}/>}/>
                    <Route path="/" element={ <Dashboard deleteUser={deleteUser} users={usersList}/>}/>
                </Routes>
            </Wrapper>
        </MainTemplate>
        </ThemeProvider>
    </Router>
    );
};

export default Root;