import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: inline-block; 
`;


export const ProdCardsTittle = styled.div`
    font-size:28px;
    margin-top:40px;
    margin-left:30px;
    display:flex;

`;


export const ProdCardsTittle2 = styled.div`
    font-size:17px;
    margin-left:30px;
    display:flex;
    margin-top:15px;
    font-weight:500;
`;

export const Categories = styled.div`
    display:flex;
    margin-top:15px;
    margin-left:30px;
`;

export const CategoriesCards = styled.div`
  display: flex;
  justify-content: center;
  height: 55px;
  width: 240px;
  border-width: 2px;
  border-style: solid;
  border-color: lightgray;
  margin-left: -1px;
  text-align: center;
  align-items: center;

  &:hover {
    text-decoration: underline;
    color: darkred;
    cursor: pointer;
  user-select: none;
  }
`;

export const MainContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 0; 
  margin-top: 15px;
  margin-left: 30px;
`;
