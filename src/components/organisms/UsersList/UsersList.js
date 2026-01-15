import React, {useEffect, useState} from 'react';
import {users} from 'data/users';
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import {Wrapper,StyledList}  from "./UsersList.styles";

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
    const [loading,setLoading] = useState(true);

    useEffect(() =>{
        setLoading(true);
        mockApi(true)
            .then((data)=>{
                setLoading(false);
                setUsersList(data)
            });
        return () => {}
    },[])

    const deleteUser =(name)=>{
        const filteredUsers = usersList.filter(user => user.imie !== name);
        setUsersList(filteredUsers);
    }

    return(
        <Wrapper>
            <h1>{loading ? 'Loading...':'Lista'}</h1>
            <StyledList>
                {usersList.map((userData, index) => (
                    <UsersListItem deleteUser={deleteUser}  key={userData.imie} userData={userData}/>
                ))}
            </StyledList>
        </Wrapper>
    );
};
export default UsersList;