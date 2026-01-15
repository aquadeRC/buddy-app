import React, {useEffect, useState} from 'react';
import {users} from 'data/users';
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import {Wrapper,StyledList, StyledTitle}  from "./UsersList.styles";
import FormField from "../../molecules/FormField/FormField";

const mockApi =(succes) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(users){
                resolve([...users]);
            } else {
                reject({message:'Error'});
            }
        }, 2000);
    });
}

const UsersList= () => {
    const [usersList, setUsersList] = useState([]);
    const [formValue, setFormValues] = useState({
        imie:'',
        frekwencja:'',
        srednia:''
    });


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

    return(
        <>
            <Wrapper>
                <StyledTitle>Dodaj studenta</StyledTitle>
                <FormField labelka={"Name"} name={"imie"} id={"imie"} value={formValue.imie} onChange={handleInputChange}/>
                <FormField labelka={"Frekwencja"} name={"frekwencja"} id={"frekwencja"} value={formValue.frekwencja} onChange={handleInputChange}/>
                <FormField labelka={"Średnia"} name={"srednia"} id={"srednia"} value={formValue.srednia} onChange={handleInputChange}/>
                <button>Dodaj</button>
            </Wrapper>
            <Wrapper>
                <StyledTitle>Lista studentów</StyledTitle>
            <StyledList>
                {usersList.map((userData, index) => (
                    <UsersListItem deleteUser={deleteUser}  key={userData.imie} userData={userData}/>
                ))}
            </StyledList>
        </Wrapper>
        </>
    );
};
export default UsersList;