import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="left-side">Left</div>
      <div className="right-side">
        Right
        <h1>Hey, {username}</h1>
        <br />
        <Link to="/">
          <button>Deconnexion</button>
        </Link>
        <div className="icon-profil">icon</div>
      </div>
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
  }
  .right-side {
    background: purple;
  }

`;
