import React, {useState} from "react";
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/'

import FormField from './FormField';
import {RenderWithThemeProviders} from "helpesr/renderWithThemeProvider";

const InputWithButton = () => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e)=>setInputValue(e.target.value);

    return (
        <>
            <input value={inputValue} onChange={handleInputChange}  name="Name" id="name" placeholder="Enter your name" />
            <button disabled={!inputValue}>Submit</button>
        </>
    );
};

describe('Input wit button', () => {

    it("Render component", () => {
        render(<InputWithButton />);
        screen.getByText('Submit');
    });

    it('Poprawne zmiany vartosci', () => {
        render(<InputWithButton />);
        const inputItem = screen.getByPlaceholderText('Enter your name');
        const buttonItem = screen.getByText('Submit');

        expect(buttonItem).toBeDisabled();
        fireEvent.change(inputItem, {target: {value: 'Roman'}});

        expect(inputItem).toHaveValue('Roman');
        expect(buttonItem).not.toBeDisabled();
    });

})

describe('FormField', () => {
    it("Render component", () => {
        RenderWithThemeProviders(<FormField label="name" name="name" id="name"/>);
    })
})
