import React from "react";
import { Link, useParams } from "react-router-dom";
import { theme } from "../../../theme";
import styled from "styled-components";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <div className="nav"> NavBar
          <h1>Bonjour {username}</h1>
          <br />
          <Link to="/">
            <button>Deconnexion</button>
          </Link>

          <div className="icon-profil">icon</div>
        </div>
        <main>Main</main>
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    /* border-radius: ${theme.borderRadius.extraRound}; */

    .nav {
      background: #3919f0;
      display: flex;
      flex-direction: column;

      height: 10vh;
      /* border-radius: 15px 15px 0px 0px; */

    }
    main {
      background: green;
      flex: 1;
    }
  }
`;
