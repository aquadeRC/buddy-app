import React from 'react';
import Nawigacja from 'components/organisms/Nawigacja/Nawigacja';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';

const MainTemplate = ({ children }) => {
    return (
        <Wrapper>
            <Nawigacja />
            {children}
        </Wrapper>
    );
};

export default MainTemplate;
