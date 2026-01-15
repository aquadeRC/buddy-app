import React from 'react';
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import {Wrapper,StyledList, StyledTitle}  from "./UsersList.styles";


const UsersList= ({usersList, deleteUser}) => {
    return(
        <>
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