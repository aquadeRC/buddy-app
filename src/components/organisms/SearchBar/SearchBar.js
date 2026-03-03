import React, { useState }  from 'react';
import debounce from 'lodash.debounce';
import {useCombobox} from "downshift";
import {Input} from "components/atoms/Input/Input";
import {SearchBarWrapper, SearchResults, SearchWrapper, StatusInfo,SearchResultItem } from "components/organisms/SearchBar/SearchBar.styles";
import { useStudents } from 'hooks/useStudents';

export const SearchBar = () => {
    const [matchingStudents, setMatchingStudents] = useState([]);
    const {findStudents} = useStudents();

    const getMatchingStudents = debounce(async (inputValue) => {
        const {students} = await findStudents(inputValue);
        setMatchingStudents(students);
    }, 500);


    const {
        isOpen,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        highlightedIndex,
        getItemProps,
        selectedItem,
        getComboboxProps,
    } = useCombobox({
        items:matchingStudents,
        onInputValueChange:getMatchingStudents
    })

    return (
        <SearchBarWrapper>
            <StatusInfo>
                <p>Zalogowany jako:</p>
                <p><strong>Nauczyciel</strong></p>
            </StatusInfo>
            <SearchWrapper {...getComboboxProps}>
                <Input {...getInputProps()} name="Search" id="Search"/>
                <SearchResults isvisible={(isOpen && matchingStudents.length>0).toString()} {...getMenuProps()}>
                    {isOpen && matchingStudents.map((item, index) => (
                        <SearchResultItem
                            isHighlighted={highlightedIndex === index}
                            {...getItemProps({item, index})}
                            key={item.id}
                        >
                            {item.name}
                        </SearchResultItem>
                    ))}
                </SearchResults>
            </SearchWrapper>
        </SearchBarWrapper>
    );
};

//19:03