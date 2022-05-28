import React, { useState } from 'react'

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom"

import LoginPage from './pages/LoginPages/login';
import HomePage from './pages/HomePage';
import { AuthContext } from "./pages/contexts/auth";


const AppRoutes = () => {
    const [user, setUser] = useState(null);

    const login = ( email, password ) => {
        console.log("login", { email, password });
        setUser({ id: "123", email });
    };

    const logout = () => {
        console.log("logout")

    };
    // user != null
    // authenticated == true


    // user == null
    // authenticated == false


    return (
        <Router>
            <AuthContext.Provider value={{authenticated: !!user, user, login}}>
            <Routes>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/" element={<HomePage/>}/>
            </Routes>
            </AuthContext.Provider>
        </Router>

    );
};

export default AppRoutes;