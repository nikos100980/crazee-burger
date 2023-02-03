import React from "react";
import { theme } from "../../../theme";
import styled from "styled-components";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import Main from "./Main";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        
          <Navbar username={username} />
        
        <Main/>
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
     border-radius: ${theme.borderRadius.extraRound};

    
  }
`;
