import React from 'react';
import { Logo, StyledLink, Wrapper } from 'components/organisms/Nawigacja/Nawigacja.styles';

const Nawigacja = () => {
return (
    <Wrapper>
        <Logo>
            <h1>
                Study
                <br />
                Buddy
            </h1>
        </Logo>
        <StyledLink to="/">Dashboard</StyledLink>
        <StyledLink to="/add-user">Dodaj uzytkownika</StyledLink>
        <StyledLink to="/">Settings</StyledLink>
        <StyledLink to="/">Logout</StyledLink>
    </Wrapper>

);
};

export default Nawigacja;