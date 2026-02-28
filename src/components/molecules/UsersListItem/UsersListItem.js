
import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import DeleteButton from "../../atoms/DeleteButton/DeleteButton";
import {Wrapper,  StyledInfo,StyledSrednia} from "./UsersListItem.styles";
import { UserShape } from 'types';
import {UserContext }from "Providers/UserProvider";


const UsersListItem= ({ userData:{name, attendance ='0%', average}}) => {
    const {deleteUser} = useContext(UserContext);
   return (
    <Wrapper>
        <StyledSrednia value={average}>{average}</StyledSrednia>
        <StyledInfo>
            <p>
                {name}
                <DeleteButton onClick={() => deleteUser(name)}/>
            </p>
            <p>frekwencja: {attendance}</p>
        </StyledInfo>
    </Wrapper>
);
};

UsersListItem.propTypes ={
    userData: PropTypes.arrayOf(PropTypes.shape(UserShape)),
};

export default UsersListItem;






