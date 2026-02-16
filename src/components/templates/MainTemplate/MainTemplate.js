import React from 'react';

import Nawigacja from 'components/organisms/Nawigacja/Nawigacja';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';
import {SearchBar} from 'components/organisms/SearchBar/SearchBar';
import NewsSection from 'components/templates/NewsSection/NewsSection'


const MainTemplate = ({ children }) => {
    return (
        <Wrapper>
            <Nawigacja />
            <SearchBar/>
            {children}
            <NewsSection/>
        </Wrapper>
    );
};

export default MainTemplate;
