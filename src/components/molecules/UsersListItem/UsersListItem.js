
import React from 'react';
import PropTypes from 'prop-types';
import styled  from "styled-components";
import { ReactComponent as DeleteIcon} from 'assets/icons/delete-icon.svg'

const Wrapper = styled.li`
    display: flex;
    align-items: center;
    position: relative;
    &:not(:last-child)::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: lightgray;
    }
`;

const StyledButton = styled.button`
    width: 25px;
    height: 25px;
    background-color: ${(props)=> props.isSecoundary ? '#e7e044' :'#c0c7d6'};
    border-radius: 50px;
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    
    svg{
        width: 100%;
        height: 100%;
    }
`;


const UsersListItem= ({userData:{imie, frekwencja ='0%', srednia}}) =>(
    <Wrapper>
        <div> {srednia}</div>
        <div>
            <p>{imie}</p>
            <p>{frekwencja}</p>
        </div>
        <StyledButton>
            <DeleteIcon/>
        </StyledButton>
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






