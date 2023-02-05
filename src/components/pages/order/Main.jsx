import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function Main() {
  return (
    <MainStyled>
      <div className="basket-container">basket</div>
      <div className="menu-container">menu</div>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: row;
  flex: 1;

  .basket-container {
    background: purple;
    flex-basis: 25%;
  }
  .menu-container {
    background: green;
    flex-basis: 75%;
  }
`;
