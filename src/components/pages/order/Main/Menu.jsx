import React, { useState } from 'react'
import styled from 'styled-components';
import { fakeMenu1, fakeMenu2 } from '../../../../data/fakeMenu';

export default function Menu() {
const [menu, setMenu] = useState(fakeMenu2)

  return (
    <MenuStyled className="menu-container">
{menu.map((product)=>{
    return <div className="product">
        {product.title}
    </div>
})}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr) ;
  
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
    background: green;
    flex-basis: 100%;

    /* flex-basis: 75% */
  .product{
    background: orange;
    width: 240px;
    height: 330px;

  }
`;