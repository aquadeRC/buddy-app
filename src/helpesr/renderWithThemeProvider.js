import React from "react";
import {render} from '@testing-library/react'
import {ThemeProvider} from 'styled-components';
import {theme} from "assets/styles/theme";
import UserProvider from "../Providers/UserProvider";

export const RenderWithThemeProviders = (children) => {

    return render(
        <ThemeProvider theme={theme}>
            <UserProvider>
                {children}
            </UserProvider>
        </ThemeProvider>
    )
};