import React from 'react';
import AddUser from "views/AddUser";
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "assets/styles/globalStyle";
import {theme} from "assets/styles/theme";
import {Wrapper} from "./Root.styles";
import UserProvider from "Providers/UserProvider";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import MainTemplate from "../components/templates/MainTemplate/MainTemplate";


const Root = () => {
    return(
    <Router>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <MainTemplate>
            <UserProvider>
            <Wrapper>
                <Routes>
                    <Route path="/add-user" element={<AddUser />}/>
                    <Route exact path="/" element={ <Dashboard />}/>
                </Routes>
            </Wrapper>
            </UserProvider>
        </MainTemplate>
        </ThemeProvider>
    </Router>
    );
};

export default Root;