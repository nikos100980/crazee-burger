import React from 'react'
import styled from 'styled-components';

export default function Menu() {
  return (
    <MenuStyled className="menu-container">menu</MenuStyled>
  )
}

const MenuStyled = styled.div`
  
    background: green;
    flex-basis: 100%;
    
    /* flex-basis: 75% */
  
`;