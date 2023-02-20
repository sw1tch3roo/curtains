import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MediaSlider from '../mediaSlider/MediaSlider';
import Loader from '../UI/loader/Loader';

import styles from './ProductsItem.module.scss';

type ProductType = {
  image: string;
  title: string;
};

const ProductsItem: React.FC = () => {
  const [product, setProduct] = React.useState<ProductType>();
  const { productId } = useParams();

  const characteristics: string[] = [
    'Цветовая палитра',
    'Страна производства',
    'Рекомендации по стирке',
    'Размеры',
    'Тип изготовления',
    'Цветовая палитра',
    'Страна производства',
    'Рекомендации по стирке',
    'Размеры',
    'Тип изготовления',
  ];

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

    return <Loader />; // возвращаем реакт-элемент
  }

  return (
    <div className={styles.content}>
      <div className={styles.main_content}>
        <div className={styles.slider_block}>
          <MediaSlider />
        </div>
        <div className={styles.characteristics_block}>
          <div>
            <h2>Характеристика</h2>
            <br />
          </div>
          <div className={styles.characteristics}>
            <dl className={styles.characteristics}>
              {characteristics.map((char) => (
                <div className={styles.characteristic}>
                  <dt className={styles.characteristic_key}>{char}</dt>
                  <dd className={styles.characteristic_value}>Бежевый</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className={styles.description_block}>
        <div className={styles.description_name}>
          <h2>Описание</h2>
          <br />
        </div>
        <div className={styles.description_text}>
          <p>
            Тюль на ленте — завершающий штрих в оформлении окна гостиной. Легкая прозрачная ткань
            рассеивает солнечный свет, создавая уютную и комфортную атмосферу в комнате. Тюль в
            белом цвете хорошо смотрится сам по себе и в сочетании с плотными шторами, вшитая
            шторная лента формирует изящные складки. Благодаря готовым петлям тюлевая занавеска без
            труда подвешивается на крючки. - Ширина тюля — 300 см, высота — 280 см. - Полотно
            изготовлено из вуали (100% полиэстер). - Рекомендуемый уход — бережная ручная или
            машинная стирка при температуре не выше 30 C°. - На изделие распространяется гарантия
            сроком 1 год.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
