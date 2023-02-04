import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function Main() {
  return <MainStyled>Main</MainStyled>;
}

const MainStyled = styled.main`

      background: ${theme.colors.background_white};
      box-shadow: ${theme.shadows.strong};
      border-bottom-left-radius: ${theme.borderRadius.extraRound};
      border-bottom-right-radius: ${theme.borderRadius.extraRound};
      flex: 1;
    

`