import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";

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
  .input-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 18px 24px;
    gap: 12.8px;

    width: 400px;
    height: 25px;

    background: ${theme.colors.white};
    border-radius: 5px;

    input {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 0px 184.203px 0px 0px;
      border-style: none;
      height: 17px;
      left: 2px;
      top: 1px;

      background: #ffffff;

      ::placeholder {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px 184.203px 0px 0px;
        color: #d3d3d3;
        line-height: 17px;
        position: absolute;
        width: 320.2px;
        height: 17px;
        left: 2px;
        top: 1px;

        background: #ffffff;
      }
      :focus {
        outline: none;
      }
    }
  }
  .personCircle-icon {
    width: 15px;
    height: 15px;
    color: ${theme.colors.greyBlue};
  }
`;
