import React from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../reusable-ui/Logo";
import { theme } from "../../../theme";

export default function Navbar({ username }) {
  return (
    <NavbarStyled >
      <Logo className= "logo-order-page" onClick={() => window.location.reload()}/>

      <NavbarRightSide
        Icon={<BsPersonCircle className="icon-profil" />}
        username={username}
      />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 20px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};

  .logo-order-page{
    cursor: pointer;
  }
`;
