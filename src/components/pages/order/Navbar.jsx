import React from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="left-side">Left</div>
      <NavbarRightSide
        Icon={<BsPersonCircle className="icon-profil" />}
        username={username}
      />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: #3919f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  /* border-radius: 15px 15px 0px 0px; */

  .left-side {
    background: pink;
    width: 240.48px;
    height: 10vh;
    margin-left: 20px;
  }
`;
