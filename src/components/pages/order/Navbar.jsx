import React from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../reusable-ui/Logo";

export default function Navbar({ username }) {
  return (
    <NavbarStyled onClick={()=>window.location.reload()}>
      <Logo  />

      <NavbarRightSide
        Icon={<BsPersonCircle className="icon-profil" />}
        username={username}
      />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 70px 0 20px;
   border-radius: 15px 15px 0px 0px;

  .left-side {
    background: pink;
    width: 240.48px;
    height: 10vh;
    margin-left: 20px;
  }
`;
