import React, { FC, useState, useEffect, useRef } from 'react';
import styles from './DownUpPanel.module.css';

interface DownUpPanelProps {
}

const DownUpPanel: FC<DownUpPanelProps> = () => {
  const [isCatalogClicked, setIsCatalogClicked] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleCatalogClick = () => {
    setIsCatalogClicked(!isCatalogClicked);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (panelRef.current) {
        const panelOffset = panelRef.current.offsetTop;
        setIsFixed(window.pageYOffset > panelOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
    <div 
      ref={panelRef}
      className={`${styles.DownUpPanel} ${isFixed ? styles.fixed : ''}`}
    >
      <div
        className={styles.catalogBtn}
        onClick={handleCatalogClick}
      >
        Каталог товаров <span className={styles.downBtn}>🡳</span>
      </div>

      <div className={`${isCatalogClicked ? styles.visibleDiv : styles.hiddenDiv}`}>
        <div className={styles.dopDivMenuEl}> <img src="https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/icons/chess-26x26.webp" alt="" className={styles.imgMenuCatalog} /> Шахматы, шашки</div>
        <div className={styles.dopDivMenuEl}> <img src="https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/icons/nards-1-26x26.webp" alt="" className={styles.imgMenuCatalog} /> Нарды</div>
        <div className={styles.dopDivMenuEl}> <img src="https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/icons/poker-1-26x26.webp" alt="" className={styles.imgMenuCatalog} /> Покер</div>
        <div className={styles.dopDivMenuEl}> <img src="https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/icons/puzzle-26x26.webp" alt="" className={styles.imgMenuCatalog} /> Головоломки</div>
        <div className={styles.dopDivMenuEl}> <img src="https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/icons/gift-26x26.webp" alt="" className={styles.imgMenuCatalog} /> Подраки</div>
        <div className={styles.dopDivMenuEl}> <img src="https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/icons/3d-puzzle-26x26.webp" alt="" className={styles.imgMenuCatalog} /> 3D пазлы</div>
        <div className={styles.dopDivMenuEl}> <img src="https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/icons/set-26x26.webp" alt="" className={styles.imgMenuCatalog} /> Комплекты</div>
        <div className={styles.dopDivMenuEl}> <img src="https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/icons/board-game-26x26.webp" alt="" className={styles.imgMenuCatalog} /> Настольные игры</div>
        <div className={styles.dopDivMenuEl}> <img src="https://1001rich.com.ua/image/cache/catalog/image/cache/catalog/icons/plane-26x26.webp" alt="" className={styles.imgMenuCatalog} /> Сборные модели</div>
      </div>

      <div className={styles.otherBtns}>
        <div className={styles.otherBtn}>Акции</div>
        <div className={styles.otherBtn}>Доставка и оплата</div>
        <div className={styles.otherBtn}>Контакты</div>
        <div className={styles.otherBtn}>О компании</div>
        <div className={styles.otherBtn}>Блог</div>
      </div>
    </div>
    
  );
};

export default DownUpPanel;
