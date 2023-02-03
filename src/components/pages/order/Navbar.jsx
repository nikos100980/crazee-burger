import React from "react";
import { Link} from "react-router-dom";
import styled from "styled-components";

export default function Navbar({username}) {
  
  return (
    <NavbarStyled>
      Navbar
      <h1>Bonjour {username}</h1>
      <br />
      <Link to="/">
        <button>Deconnexion</button>
      </Link>
      <div className="icon-profil">icon</div>
    </NavbarStyled>
  );

  
}

const NavbarStyled = styled.nav`
background: #3919f0;
    display: flex;
    flex-direction: column;

    height: 10vh;
    /* border-radius: 15px 15px 0px 0px; */
    
`





    
  