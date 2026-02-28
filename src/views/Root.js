import React from 'react';
import AddUser from "views/AddUser";
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "assets/styles/globalStyle";
import {theme} from "assets/styles/theme";
import {Wrapper} from "./Root.styles";

import {BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import MainTemplate from "../components/templates/MainTemplate/MainTemplate";


const Root = () => {

    return(
    <Router>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <MainTemplate>
            <Wrapper>
                <Routes>
                    <Route exaxt path="/" element={<Navigate to="/group" />}/>
                    <Route path="/group/:id?" element={ <Dashboard />}/>
                    <Route path="/add-user" element={<AddUser />}/>
                </Routes>
            </Wrapper>
        </MainTemplate>
        </ThemeProvider>
    </Router>
    );
};

export default Root;