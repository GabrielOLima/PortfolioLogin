import React, { useState } from "react";
import { Title, TitleMenor, Login, Field, Actions } from  "./styles";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", { email, password })
    }


  return (
    <Login>
        <Title fontSize={20}>
            Login do Sistema<br></br>
            <span>Prepare-se para uma experiência incrível<br></br></span>
        </Title>
        <TitleMenor>Aqui eu coloco o Lorem Ipsum</TitleMenor>
        <form action="" className="form" onSubmit={handleSubmit}>
            <Field>
                <label htmlFor="email">Email</label>
                <input type="email"
                 name="email"
                 id="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 />
            </Field>
            <Field>
                <label htmlFor="Password">Password</label>
                <input type="Password" 
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
