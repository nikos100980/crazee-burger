import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function Logo() {
  return (
    <LogoStyled>
      <h1>CRAZEE</h1>
      <img src="/images/F03-logo-orange.png" alt="logo crazee-burger" />
      <h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
display:flex ;
align-items: center;
transform: scale(2.5);
  
h1 { display: inline;
  text-align: center;
  justify-content: center;
  font-family: "Amatic SC", cursive;
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 1.5px;
  line-height: 1em;
  color: ${theme.colors.primary_burger};
}
  img{
    width: 80px;
    height: 60px;
    object-fit: contain;
    object-position: center;
    margin: 0.5px;

  }
`;
