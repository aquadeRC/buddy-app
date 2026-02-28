import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const UserContext = React.createContext(
    {
        usersList:[],
        handleAddUser:()=>{},
        deleteUser:()=>{},
    }
);

const UserProvider = ({ children }) => {
    const [usersList, setUsersList] = useState([]);

    useEffect(() =>{
         axios
            .get('/students')
            .then(data => setUsersList(data.data))
            .catch(err => console.log("error in userProvider response " + err));
    })

    const deleteUser =(name)=>{
        const filteredUsers = usersList.filter(user => user.name !== name);
        setUsersList(filteredUsers);
    }

    const handleAddUser = (values) => {
        const newUser ={
            name: values.name,
            attendance: values.attendance,
            average: values.average
            ,
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