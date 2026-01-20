import React, {useEffect, useState} from 'react';
import {users as userData} from "../data/users";

export const UserContext = React.createContext(
    {
        usersList:[],
        handleAddUser:()=>{},
        deleteUser:()=>{},
    }
);

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

const UserProvider = ({ children }) => {
    const [usersList, setUsersList] = useState([]);

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

    const handleAddUser = (values) => {
        const newUser ={
            imie: values.imie,
            frekwencja: values.frekwencja,
            srednia: values.srednia,
        }
        setUsersList( [...usersList, newUser]);
    }

    return (
        <UserContext.Provider
            value={{
                usersList,
                handleAddUser,
                deleteUser,
            }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;