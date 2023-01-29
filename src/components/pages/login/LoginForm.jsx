import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

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
      <hr />
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
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  h1 {
    color: ${theme.colors.white};
    font-size: 48px;
  }
  hr {
    border: 1.5px solid ${theme.colors.primary};
    margin-bottom: 40px;
  }
  h2 {
    font-size: 36px;
    /* line-height: 36px; */
    color: ${theme.colors.white};

    
  }
`;
