import React  from "react";
import { screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/'
import {render} from "../tests-utils";
import AddUser from "./AddUser";

import Dashboard from "./Dashboard";


describe('Add user', () => {

    beforeAll(async () => {
        global.TextEncoder = require('util').TextEncoder;
        global.TextDecoder = require('util').TextDecoder;
    });

    it("Nie dodaje nowego uzytkownika do listy jesli potwierdzenie nie jest zaznaczone", () => {
        render(
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