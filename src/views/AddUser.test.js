import React  from "react";
import { screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/'

import AddUser from "./AddUser";
import {RenderWithThemeProviders} from "helpesr/renderWithThemeProvider";
import Dashboard from "./Dashboard";



describe('Add user', () => {
    it("Nie dodaje nowego uzytkownika do listy jesli potwierdzenie nie jest zaznaczone", () => {
        RenderWithThemeProviders(
            <>
                <AddUser />
                <Dashboard/>
            </>
        );

        fireEvent.change( screen.getByTestId('Name'),{target:{value: 'Ziutek'}});
        fireEvent.change( screen.getByTestId('Frekwencja'),{target:{value: '80%'}});
        fireEvent.change( screen.getByTestId('Średnia'),{target:{value: '5.0'}});
        fireEvent.click( screen.getByText('Dodaj'));

        const newUser = screen.queryByText('Ziutek');
        expect(newUser).not.toBeInTheDocument();
    });

    /*it("Dodaje nowego uzytkownika do listy", () => {
        RenderWithThemeProviders(
            <>
                <AddUser />
                <Dashboard/>
            </>
        );

        fireEvent.change( screen.getByTestId('Name'),{target:{value: 'Ziutek'}});
        fireEvent.change( screen.getByTestId('Frekwencja'),{target:{value: '80%'}});
        fireEvent.change( screen.getByTestId('Średnia'),{target:{value: '5.0'}});
        fireEvent.click( screen.getByTestId('Potwierdz'));
        fireEvent.click( screen.getByText('Dodaj'));

        screen.getByText('Ziutek');
    });*/
});