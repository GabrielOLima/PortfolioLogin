import React, { useState, useContext } from 'react'

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom"

import LoginPage from './pages/LoginPages/login';
import HomePage from './pages/HomePage';

import { AuthProvider, AuthContext } from "./pages/contexts/auth";


const AppRoutes = () => {

    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div className="loading">Carregando...</div>;
        }

        if (!authenticated) {
            return <Navigate to="/login"/>;
        }

        return children;
    };
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
            <AuthProvider>
            <Routes>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/" element={<Private><HomePage/></Private>}/>
            </Routes>
            </AuthProvider>
        </Router>

    );
};

export default AppRoutes;