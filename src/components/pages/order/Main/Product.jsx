import React from "react";
import styled from "styled-components";

export default function Product({title, imageSource, price}) {
  return (
    <ProductStyled className="product">
      <div className="product-image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="product-info-text">
        <div className="product-title">{title}</div>
        <div className="product-description">
          <div>{price} </div>
          <button>Ajouter</button>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  
    background: orange;
    width: 240px;
    height: 330px;

    .product-image {
      border: solid 1px green;
      width: 100px;
      height: auto;
      img {
        width: 100%;
        height: auto;
      }
    }
    .product-info-text {
      border: solid 2px green;

      .product-description {
        border: solid 1px green;
      }
    }
  
`;
