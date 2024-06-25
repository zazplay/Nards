import styled from 'styled-components';

export const ProductCardWrapper = styled.div`
    height: 350px;
    width:240px;
    border-style:solid;
    border-color: lightgray;
    border-width:1px;

`;

export const ProductImg = styled.img`
    height:150px;
    width:180px;
    margin-top:20px;
    
`;


export const ProductCost = styled.div`
    color:darkred;
    margin-top: 20px;
    font-size:14px;
    margin-bottom:10px;
`;

export const ProductTitle = styled.div`
    margin-left:10px;
    margin-right:10px;
    margin-top: 10px;
    font-size:16px;
`;

export const BuyBtn = styled.button`
    height:30px;
    width:80px;
    margin-top:10px;
`;
