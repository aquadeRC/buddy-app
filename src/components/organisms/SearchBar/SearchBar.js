import React from 'react';
import {Input} from "components/atoms/Input/Input";
import {SearchBarWrapper, StatusInfo} from "components/organisms/SearchBar/SearchBar.styles";

export const SearchBar =() => (
    <SearchBarWrapper>
        <StatusInfo>
            <p>Zalogowany jako:</p>
            <p><strong>Nauczyciel</strong></p>
        </StatusInfo>
        <Input />
    </SearchBarWrapper>
);