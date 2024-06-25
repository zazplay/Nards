import React, { FC } from 'react';
import styles from './UpPanel2.module.css';

interface UpPanel2Props {}

const UpPanel2: FC<UpPanel2Props> = () => (
  <div className={styles.UpPanel2}>
    <img src="https://1001rich.com.ua/image/cache/catalog/image/catalog/logo1.webp" alt="" className={styles.imgLogo} />
    <div className={styles.teleph}>
        <div className={styles.nums}>(068)1588889, (095)6624309</div>
        <div className={styles.callMe}> <img src="https://cdn-icons-png.flaticon.com/128/78/78651.png" alt=""  className={styles.callMeico}/> Заказать звонок</div>
    </div>
    <input type="search" className={styles.siteSearch} name="q" placeholder=" Поиск"  />
    <button className={styles.searchBtn}><img className={styles.searchBtnImg} src="https://cdn-icons-png.flaticon.com/128/2319/2319177.png" alt="" /></button>
    <img src="https://cdn-icons-png.flaticon.com/128/25/25424.png" alt="" className={styles.like} />
    <div className={ styles.bagcontainer}>
      <img src="https://cdn-icons-png.flaticon.com/128/340/340426.png" alt="" className={ styles.bag}/>
    <div className={ styles.circle}>0</div> 
    </div>
    <div className={styles.bagText}>
          <div>Коризина</div>
          <p className={styles.BagCost}> 0 грн. </p>
      </div>
  </div>
);

export default UpPanel2;
