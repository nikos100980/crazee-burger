import React, { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../data/fakeMenu";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled className="menu-container">
      {menu.map((product) => {
        return( <div className="product">
            <div className="product-image"> <img src={product.imageSource} alt="" /> </div>
            <div className="product-info-text">
                <div className="product-title">{product.title}</div>
                <div className="product-description">
                    <div>{product.price} </div>
                    <button>Ajouter</button>
            
                </div>
            </div>
        </div>);
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
  background: #F5F5F7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  

  
  .product {
    background: orange;
    width: 240px;
    height: 330px;
    
     



.product-image{
    border: solid 1px green;
width: 100px;
height: auto;
img{
    width: 100%;
    height: auto;
}

    
    


}
.product-info-text{
    border: solid 2px green;

    .product-description{
        border: solid 1px green;
    }
}
  }
`;
