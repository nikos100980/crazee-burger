import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="left-side">Left</div>
      <div className="right-side">
        <div className="profil-name">
          <h1>
            Hey, <strong>{username}</strong>
          </h1>
          <br />
          <Link to="/">
            <span>Se déconnecter</span>
          </Link>
        </div>
        <div className="icon-container">
          <BsPersonCircle className="icon-profil" />
        </div>
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
    width: 240.48px;
    height: 10vh;
    margin-left: 20px;
  }
  .right-side {
    width: 119.28px;
    height: 44px;
    margin-right: 70px;
    margin-top: 27.09px;
    margin-bottom: 27.09px;
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 10px;
    padding: 0px;

    .profil-name {
      width: 73.28px;
      height: 44px;
      flex: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;

      h1 {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        margin: 0px;
        text-align: right;

        color: #747b91;
        strong {
          color: #ffa01b;
        }
      }

      span {
        position: absolute;
        width: 74px;
        height: 14px;
        right: 0.28px;
        top: 26px;

        text-decoration: none;
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        text-align: right;

        color: #747b91;
      }
    }

    .icon-container {
      width: 36px;
      height: 36px;

      .icon-profil {
        align-items: center;
        font-size: 36px;
        color: #747b91;
      }
    }
  }
`;
