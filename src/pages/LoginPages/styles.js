import styled from "styled-components"

export const Title = styled.h1`
    color: #f00;
    font-size: ${ props => `${props.fontSize}px` };
    margin: 3rem 0 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    span {
        font-size: 12px;
        content: "\a";
        white-space: pre;
    }
`;

export const TitleMenor = styled(Title)`
    color: #00f;
    font-size: 16px;

`;

export const Login = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 2.5rem;
    padding: 0 2rem;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 8px 32px rgba(31, 38, 145, 0.37);
    backdrop-filter: blur(8.5px);
    border-radius: 20px;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    form {
        //background-color: #f1f1ff;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 20%;
        width: 100%;
        max-width: 480px;
        padding: 0.5rem;
    }

`;

export const Field = styled(Login)`
    padding-bottom: 0.5rem;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 8px 32px rgba(31, 38, 145, 0.37);
    label {
        display: block;
    }
    input {
        width: 100%;
    }
`;

export const Actions = styled(Login)`
    text-align: center;
    margin-top: 0.5rem;
    max-height: 1rem;
`;

export const ButtonContainer = styled.div`
    margin: 1rem 0 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const LoginWith = styled.h5`
    cursor:pointer;
`;

export const HorizontalRule = styled.hr`
    width: 90%;
    height: 0.3rem;
    border-radius: 0.8rem;
    border:none;
    background: linear-gradient(to right, #14163c 0%, #03217b 79%);
    backdrop-filter: blur(25px);
`;

export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 2rem 0 3rem 0;
    width: 80%;
`;

export const ForgotPassword = styled.h4`
    cursor: pointer;
`;
