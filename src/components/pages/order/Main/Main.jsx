import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
       {/* <div className="basket-container">basket</div> */}
       <Menu />
      
    </MainStyled>
  );
}

const MainStyled = styled.main`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: grid;
  grid-template-columns: 1fr;
   flex: 1;
  overflow-y: scroll;

  /* .basket-container {
    background: purple;
    flex-basis: 25%;
  } */
  
`;
