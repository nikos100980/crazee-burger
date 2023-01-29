import React from "react";
import LoginForm from "./LoginForm";
import styled from "styled-components";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <div>Logo</div>
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0px;

  ::before {
    content: " ";
    position: absolute;

    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;

    background: url("/images/F03-burger-background.jpg"), rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    z-index: -1;
  }
`;
