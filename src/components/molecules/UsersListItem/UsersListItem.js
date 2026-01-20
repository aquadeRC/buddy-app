
import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import DeleteButton from "../../atoms/DeleteButton/DeleteButton";
import {Wrapper,  StyledInfo,StyledSrednia} from "./UsersListItem.styles";
import { UserShape } from 'types';
import {UserContext }from "Providers/UserProvider";


const UsersListItem= ({ userData:{imie, frekwencja ='0%', srednia}}) => {
    const {deleteUser} = useContext(UserContext);
   return (
    <Wrapper>
        <StyledSrednia value={srednia}>{srednia}</StyledSrednia>
        <StyledInfo>
            <p>
                {imie}
                <DeleteButton onClick={() => deleteUser(imie)}/>
            </p>
            <p>frekwencja: {frekwencja}</p>
        </StyledInfo>
    </Wrapper>
);
};

UsersListItem.propTypes ={
    userData: PropTypes.arrayOf(PropTypes.shape(UserShape)),
};

export default UsersListItem;






