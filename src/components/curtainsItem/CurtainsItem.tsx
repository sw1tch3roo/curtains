import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CurtainsItem.module.scss';

type ICurtainsType = {
  id: number;
  image: string;
  title: string;
  price: number;
};

const CurtainsItem: React.FC<ICurtainsType> = ({ id, image, title, price }) => {
  const logoImage = image[0]; // выводим первое изображение из массива изображений как лого

  return (
    <div className={styles.portfolio_item}>
      <div className={styles.portfolio_item_wrap}>
        <Link to={`/products/${id}`}>
          <img alt="Шторы" src={logoImage} />
          <div className={styles.portfolio_item_inner}>
            <div className={styles.portfolio_heading}>
              <h3>{title}</h3>
            </div>
            <ul>
              <li>Шторы на любой вкус</li>
              <li>Главный офис в центре города</li>
              <li>Большое количество производителей</li>
            </ul>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CurtainsItem;
