import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginForm() {
  // state
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // comportements
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/order/${inputValue}`);
    setInputValue("");
  };

  // etats
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  //affichage ( render)
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        name=""
        id=""
        placeholder="Entrez votre prénom"
        required
      />
      <button>Accédez à votre espace</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`


  h1 {
    font-family: "Amatic SC";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 61px;
    

    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;
  }
  h2 {
    font-family: "Amatic SC";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 46px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;
  }
`;
