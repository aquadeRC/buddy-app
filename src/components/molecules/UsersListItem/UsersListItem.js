
import React from 'react';
import PropTypes from 'prop-types';

import DeleteButton from "../../atoms/DeleteButton/DeleteButton";
import {Wrapper,  StyledInfo,StyledSrednia} from "./UsersListItem.styles";


const UsersListItem= ({deleteUser,  userData:{imie, frekwencja ='0%', srednia}}) =>(
    <Wrapper>
        <StyledSrednia value={srednia}>{srednia}</StyledSrednia>
        <StyledInfo>
            <p>
                {imie}
                <DeleteButton onClick={() =>deleteUser(imie)}/>
            </p>
            <p>frekwencja: {frekwencja}</p>
        </StyledInfo>
    </Wrapper>
);

UsersListItem.propTypes ={
    userData: PropTypes.shape({
        imie: PropTypes.string.isRequired,
        frekwencja: PropTypes.string,
        srednia: PropTypes.string,
    }),
};

export default UsersListItem;






