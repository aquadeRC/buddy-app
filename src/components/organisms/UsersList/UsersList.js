import React from 'react';
import PropTypes from 'prop-types';
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import {StyledList}  from "./UsersList.styles";
import { Title } from 'components/atoms/Title/Title';
import { UserShape } from 'types';


const UsersList= ({usersList =[]}) => {
    return(
        <>
            <Title>Lista studentów</Title>
            <StyledList>
                {usersList.map((userData, index) => (
                    <UsersListItem  key={userData.name} userData={userData}/>
                ))}
            </StyledList>
        </>
    );
};
UsersList.propTypes = {
    usersList: PropTypes.arrayOf(PropTypes.shape(UserShape)),
};

export default UsersList;