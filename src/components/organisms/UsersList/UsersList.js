import React from 'react';
import PropTypes from 'prop-types';
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import {StyledList}  from "./UsersList.styles";
import { Title } from 'components/atoms/Title/Title';
import { UserShape } from 'types';


const UsersList= ({usersList, deleteUser}) => {
    return(
        <>
            <Title>Lista studentów</Title>
            <StyledList>
                {usersList.map((userData, index) => (
                    <UsersListItem deleteUser={deleteUser}  key={userData.imie} userData={userData}/>
                ))}
            </StyledList>
        </>
    );
};
UsersList.propTypes = {
    usersList: PropTypes.arrayOf(PropTypes.shape(UserShape)),
    deleteUser: PropTypes.func,
};

export default UsersList;