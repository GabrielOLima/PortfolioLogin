import styled from "styled-components"

export const Title = styled.h1`
    color: #f00;
    font-size: ${ props => `${props.fontSize}px` };
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
    form {
        background-color: #f1f1ff;
        width: 100%;
        max-width: 480px;
        padding: 0.5rem;
    }

`;

export const Field = styled(Login)`
    padding-bottom: 0.5rem;
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