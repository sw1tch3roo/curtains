import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MediaSlider from '../mediaSlider/MediaSlider';

import styles from './ProductsItem.module.scss';

type ProductType = {
  image: string;
  title: string;
};

const ProductsItem: React.FC = () => {
  const [product, setProduct] = React.useState<ProductType>();
  const { productId } = useParams();

  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          `https://63c7ed555c0760f69ac121f6.mockapi.io/products/` + productId,
        );
        setProduct(data);
      } catch (error) {
        alert('Error with getting data!');
        navigate('/');
      }
    }

    fetchProduct();
  }, []);

  if (!product) {
    // делаем отрисовку до загрузки пиццы
    return <>Загрузка...</>; // возвращаем реакт-элемент
  }

  return (
    <div className={styles.main_content}>
      <div className={styles.slider_block}>
        <MediaSlider />
      </div>
      <div className={styles.characteristics_block}>
        <div>
          <h2>Характеристика</h2>
        </div>
        <div className={styles.characteristics}>
          <dl className={styles.characteristics}>
            <div className={styles.characteristic}>
              <dt className={styles.characteristic_key}>Цветовая палитра</dt>
              <dd className={styles.characteristic_value}>Бежевый</dd>
            </div>
            <div className={styles.characteristic}>
              <dt className={styles.characteristic_key}>Цветовая палитра</dt>
              <dd className={styles.characteristic_value}>Бежевый</dd>
            </div>
            <div className={styles.characteristic}>
              <dt className={styles.characteristic_key}>Цветовая палитра</dt>
              <dd className={styles.characteristic_value}>Бежевый</dd>
            </div>
            <div className={styles.characteristic}>
              <dt className={styles.characteristic_key}>Цветовая палитра</dt>
              <dd className={styles.characteristic_value}>Бежевый</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
