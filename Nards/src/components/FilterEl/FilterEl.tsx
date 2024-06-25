import React, { FC } from 'react';
import styles from './FilterEl.module.css';

interface FilterElProps {}

const FilterEl: FC<FilterElProps> = () => (
  <div className={styles.FilterEl}>
    <div className={styles.Way}>
      <img className={styles.imgHome} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLfIelvb0yvJsNR-OTO7PSefeKD9dEgj5BW_EzPb0q91W3fzb2IDMS&usqp=CAE&s" alt="" /> 
      <span className={styles.nardsText}> / Нарды </span>
    </div>
    <div className={styles.filterTittle}>Фильтр</div>
    <div className={styles.mainFiler}>
      <div className={styles.cancel}>
        <img src="https://cdn.icon-icons.com/icons2/1521/PNG/96/crosshd_106070.png" alt="" className={styles.imgX} />
        <div className={styles.cancelText}>Сброс</div>
      </div>
      <div className={styles.four}>
        <ul className={styles.topmenu}>
          <li>
            <input type="checkbox" id="menu1" />
            <label htmlFor="menu1">Цена <span className={styles.downStr}>▼</span></label>
            <ul className={styles.submenu}>
              <li><button>Подпункт 1</button></li>
              <li><button>Подпункт 2</button></li>
              <li><button>Подпункт 3</button></li>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="menu2" />
            <label htmlFor="menu2">Размер доски<span className={styles.downStr}>▼</span></label>
            <ul className={styles.submenu}>
              <li><button>Цена</button></li>
              <li><button>Статус наличия</button></li>
              <li><button>Подпункт 3</button></li>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="menu2" />
            <label htmlFor="menu2">Высота короля<span className={styles.downStr}>▼</span></label>
            <ul className={styles.submenu}>
              <li><button>Цена</button></li>
              <li><button>Статус наличия</button></li>
              <li><button>Подпункт 3</button></li>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="menu2" />
            <label htmlFor="menu2">Материал доски<span className={styles.downStr}>▼</span></label>
            <ul className={styles.submenu}>
              <li><button>Цена</button></li>
              <li><button>Статус наличия</button></li>
              <li><button>Подпункт 3</button></li>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="menu2" />
            <label htmlFor="menu2">Материал фигур<span className={styles.downStr}>▼</span></label>
            <ul className={styles.submenu}>
              <li><button>Цена</button></li>
              <li><button>Статус наличия</button></li>
              <li><button>Подпункт 3</button></li>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="menu2" />
            <label htmlFor="menu2">Утяжелители фигур<span className={styles.downStr}>▼</span></label>
            <ul className={styles.submenu}>
              <li><button>Цена</button></li>
              <li><button>Статус наличия</button></li>
              <li><button>Подпункт 3</button></li>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="menu2" />
            <label htmlFor="menu2">Тип доски<span className={styles.downStr}>▼</span></label>
            <ul className={styles.submenu}>
              <li><button>Цена</button></li>
              <li><button>Статус наличия</button></li>
              <li><button>Подпункт 3</button></li>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="menu2" />
            <label htmlFor="menu2">Производители<span className={styles.downStr}>▼</span></label>
            <ul className={styles.submenu}>
              <li><button>Цена</button></li>
              <li><button>Статус наличия</button></li>
              <li><button>Подпункт 3</button></li>
            </ul>
          </li>
          <div className={styles.cancel}>
        <img src="https://cdn.icon-icons.com/icons2/1521/PNG/96/crosshd_106070.png" alt="" className={styles.imgX} />
        <div className={styles.cancelText}>Сброс</div>
      </div>
          
        </ul>
      </div>
    
    </div>
  </div>
);

export default FilterEl;