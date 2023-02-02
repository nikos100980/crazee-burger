import React from "react";
import { Link, useParams } from "react-router-dom";
import { theme } from "../../../theme";
import styled from "styled-components";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <nav>
          <div className="nav-logo">logo</div>
          <div className="deconnection">
            <div className="button-deconnection">
              <h1>Bonjour {username}</h1>
              <br />
              <Link to="/">
                <button>Deconnexion</button>
              </Link>
            </div>
            <div className="icon-profil">icon</div>
          </div>
        </nav>
        <main></main>
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 24.5469px 56px 24.5625px;

  position: relative;
  width: 1512px;
  height: 982px;

  .container {
    background: red;
    height: 932.89px;
    width: 1400px;
    border-radius: ${theme.borderRadius.extraRound};
    /* flex: none;
    order: 0;
    flex-grow: 0; */
  }
  nav {
    background: pink;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 70px 0px 20px;
    gap: 950.23px;
    position: absolute;
    width: 1400px;
    height: 98.19px;
    left: 0px;
    top: 0px;
    border-radius: 15px 15px 0px 0px;

    .nav-logo {
      width: 240.48px;
      height: 98.19px;
    }

    .deconnection {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px;
      gap: 10px;

      width: 119.28px;
      height: 44px;

      .button-deconnection{
        width: 73.28px;
        height: 44px;
 
      }
      .icon-profil{
        
        width: 36px;
        height: 36px;
        top: 4px;
        left: 83.28px;
      }
    }
  }
  main {
    position: absolute;
    left: 0px;
    top: 98.19px;
    background: green;
    height: 834.7px;
    width: 1400px;
  }
`;
