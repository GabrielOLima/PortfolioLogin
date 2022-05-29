import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/auth";
import Input from "../../components/Icon";
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import { Title, TitleMenor, Login, Field, Actions } from  "./styles";

const LoginPage = () => {
    const { authenticated, login } = useContext
    (AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", { email, password })

        login(email, password); // integração com o contexto / api
    }


  return (
    <Login>
        <Title fontSize={20}>
            Login do Sistema<br></br>
            <p1>{String(authenticated)}</p1>
            <span>Prepare-se para uma experiência incrível<br></br></span>
        </Title>
        <TitleMenor>Aqui eu coloco o Lorem Ipsum</TitleMenor>
        <form action="" className="form" onSubmit={handleSubmit}>
            <Field>
                <label htmlFor="email">Email</label>
                <Input type="email"
                 placeholder="Email"
                 name="email"
                 id="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 />
            </Field>
            <br></br>
            <br></br>
            <Field>
                <label htmlFor="Password">Password</label>
                <Input type="Password"
                placeholder="Password" 
                name="Password" 
                id="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                 />
            </Field>
            <Actions>
                <button type="submit">Entrar</button>
            </Actions>
        </form>
    </Login>
  );
};

export default LoginPage;
