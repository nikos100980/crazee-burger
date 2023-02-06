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
    width: 200px;
    height: 300px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;

    .product-image {
      border: solid 1px green;
      width: 100%;
      height: auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .product-info-text {
      border: solid 2px green;

      .product-description {
        border: solid 1px green;
      }
    }
  
`;
