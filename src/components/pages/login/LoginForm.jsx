import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForwardOutline } from "react-icons/io5";
import TextInput from "../reusable-ui/TexInput";
import PrimaryButton from "../reusable-ui/PrimaryButton";

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
      <div>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>
      <div>
        <TextInput
          value={inputValue}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          Icon={<BsPersonCircle className="personCircle-icon" />}
          required
        />
        <PrimaryButton
          Icon={<IoChevronForwardOutline className="chevronRight-icon" />}
          label={"Accéder à mon espace"}
        />
      </div>
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

  .personCircle-icon {
    font-size: 15px;
    margin-right: 8px;
    color: ${theme.colors.greyBlue};
  }
  .chevronRight-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
  }
`;
