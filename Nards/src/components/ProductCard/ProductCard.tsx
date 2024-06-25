import React, { FC } from 'react';
import { ProductCardWrapper, ProductImg, ProductCost, ProductTitle, BuyBtn } from './ProductCard.styled.ts';

interface ProductCardProps {
  productImgSrc: string;
  productTitle: string; 
  productCost: string;
}

const ProductCard: FC<ProductCardProps> = ({ productImgSrc, productTitle, productCost }) => (
  <ProductCardWrapper>
    <ProductImg src = {productImgSrc}></ProductImg>
    <ProductCost>{productCost} </ProductCost>
    <div>☆☆☆☆☆</div>
    <ProductTitle>{productTitle}</ProductTitle>
    <BuyBtn>Купить</BuyBtn>
  </ProductCardWrapper>
);

export default ProductCard;
