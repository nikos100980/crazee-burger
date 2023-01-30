import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle} from "react-icons/bs";
import {IoChevronForwardOutline} from "react-icons/io5"
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
        <div className="input-container">
          <BsPersonCircle className="personCircle-icon" />
          <input
            value={inputValue}
            onChange={handleChange}
            type="text"
            name=""
            id=""
            placeholder="Entrez votre prénom"
            required
          />
        </div>
        <button className="button-container">
          <span>Accéder à mon espace</span>
          <IoChevronForwardOutline className="chevronRight-icon" />
        </button>
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
  .input-container {
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
    background: ${theme.colors.white};
    border-radius: 5px;

    input {
      font-size: 15px;
      border-style: none;
      background: #ffffff;
      width: 100%;

      ::placeholder {
        color: ${theme.colors.greyLight};
        background: ${theme.colors.white};
      }
      :focus {
        outline: none;
      }
    }
  }
  .personCircle-icon {
    font-size: 15px;
    margin-right: 8px;
    color: ${theme.colors.greyBlue};
  }
  .button-container {
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    padding: 18px 24px;
    font-weight: 800;
    color: ${theme.colors.white};
    background-color:${theme.colors.primary};
    
    border: 1px solid ${theme.colors.primary};
    border-radius: 5px;

    &:hover:not(:disabled) {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }
    &:active {
      color: ${theme.colors.white};
      background-color:${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};

    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .chevronRight-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      margin-left: 10px;

    }
  }
`;
