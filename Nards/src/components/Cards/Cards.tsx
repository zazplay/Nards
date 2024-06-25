import React, { FC } from 'react';
import { CardsWrapper, ProdCardsTittle, ProdCardsTittle2, Categories, CategoriesCards, MainContainerCards } from './Cards.styled.ts';
import Card from '../ProductCard/ProductCard.tsx'


interface CardsProps {}

const Cards: FC<CardsProps> = () => (
 <CardsWrapper>
   <ProdCardsTittle>Нарды</ProdCardsTittle>
   <ProdCardsTittle2>Выберете подкатегорию</ProdCardsTittle2>
   <Categories>
      <CategoriesCards>Деревянные нарды</CategoriesCards>
      <CategoriesCards>Стеклянные нарды</CategoriesCards>
      <CategoriesCards>Эксклюзивные нарды</CategoriesCards>
      <CategoriesCards>Фишки для нард</CategoriesCards>
      
   </Categories>
   <MainContainerCards>
      <Card productImgSrc = "https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Shahy/Chehly/chehol_50-65/chehol_for_shess-196x196.webp"
      productTitle = "Чехол-сумка для шахмат и нард под заказ (1001rich)"
      productCost = "500 грн."
      ></Card>


<Card productImgSrc = "https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Fishki/f26005/fishki26005-1-196x196.webp"
      productTitle = "Фишки для нард N5, 26мм"
      productCost = "350 грн."
      ></Card>


<Card productImgSrc = "https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Fishki/f26060/fishki-26mm-N6-700x700.webp"
      productTitle = "Фишки для нард N6, 26мм"
      productCost = "220 грн."
      ></Card>


<Card productImgSrc = "https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Nardy-Madon/c-181/Nardi-bolshie-BACKGAMMON-large-700x700.webp"
      productTitle = "Нарды большие Madon (48х57см)"
      productCost = "2435 грн."
      ></Card>

<Card productImgSrc = "https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/NBB/nbb-50013-lev/nardi-rizni-lev-bb-700x700.webp"
      productTitle = "Нарды деревянные резные Лев (50х46см)"
      productCost = "4700 грн."
      ></Card>


<Card productImgSrc = "https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Nardy-Madon/c-182/Nardi-malie-BACKGAMMON%20small-700x700.webp"
      productTitle = "Нарды малые Madon (28x33см)"
      productCost = "1640 грн."
      ></Card>


<Card productImgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvInKy1zBSRbdfQPRaqZkXVFqcUIDQMocIzg&s"
      productTitle = "Нарды из хлеба под заказ (1001rich)"
      productCost = "1200 грн."
      ></Card>


<Card productImgSrc = "https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/NBB/nbb-60019/nardi-derevyani-kozak-60-700x700.webp"
      productTitle = "Нарды деревянные резные Трезуб (60х56см)"
      productCost = "6900 грн."
      ></Card>



<Card productImgSrc = "https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/NBB/nbb-50020t/nardi-slava-geroyam-chorni-700x700.webp"
      productTitle = "Нарды деревянные резные Слава Героям черные (50х46см)"
      productCost = "4700 грн."
      ></Card>


<Card productImgSrc = "https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/NBB/nbb-60013/nardi-rizbleni-60-lev-700x700.webp"
      productTitle = "Нарды деревянные резные Лев (60х56см)"
      productCost = "6900 грн."
      ></Card>


<Card productImgSrc = "https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Nardos/NS-NTM/nardi-ruchnoj-roboti-Tadzh-Mahal-196x196.webp"
      productTitle = "Нарды ручной роботы Тадж-Махал (56х54см) NS-NTM"
      productCost = "3800 грн."
      ></Card>


<Card productImgSrc = "https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/produkts/Nardy/Nardos/NS-NM2/nardi-ruchnoj-roboti-M2-700x700.webp"
      productTitle = "Нарды ручной роботы NS-NM2 (46х46см)"
      productCost = "2550 грн."
      ></Card>
   </MainContainerCards>
 </CardsWrapper>
);

export default Cards;
