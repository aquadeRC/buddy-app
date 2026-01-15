
import React from 'react';
import PropTypes from 'prop-types';

import Button from "../../atoms/Button/Button";
import {Wrapper,  StyledInfo,StyledSrednia} from "./UsersListItem.styles";


const UsersListItem= ({deleteUser,  userData:{imie, frekwencja ='0%', srednia}}) =>(
    <Wrapper>
        <StyledSrednia value={srednia}>{srednia}</StyledSrednia>
        <StyledInfo>
            <p>
                {imie}
                <Button onClick={() =>deleteUser(imie)}/>
            </p>
            <p>attendance: {frekwencja}</p>
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






