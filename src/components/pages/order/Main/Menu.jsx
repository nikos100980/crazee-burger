import React, { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../data/fakeMenu";
import Product from "./Product";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled className="menu-container">
      {menu.map((product) => {
        return (
          <Product
            title={product.title}
            imageSource={product.imageSource}
            price={product.price}
          />
        )
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  background: #f5f5f7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  
`;
