import React, { FC } from 'react';
import styles from './UpPanel1.module.css';

interface UpPanel1Props {}

const UpPanel1: FC<UpPanel1Props> = () => (
  <div className={styles.UpPanel1}>
    <a href="https://www.facebook.com/1001rich/" >
      <img src='https://cdn-icons-png.flaticon.com/512/59/59439.png' className={styles.facebookImg} />
    </a>
    <div className={styles.leftBtns}>
      <img src="https://1001rich.com.ua/image/cache/catalog/catalog/language/ru-ru/ru-ru.webp" className={styles.ru} />       
      <a className={styles.otherBtns} >Русский</a>
      <a className={styles.otherBtns} >Сравнение 0</a>
      <img src="https://cdn-icons-png.flaticon.com/128/6386/6386976.png" className={styles.accico} />
      <a className={styles.otherBtns} > Личный кабинет</a>
      
    </div>
  </div>
);

export default UpPanel1;
