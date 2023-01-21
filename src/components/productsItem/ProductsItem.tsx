import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './media_slider.module.scss';

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
    <div className={styles.slider_bl_css}>
      <ul className={styles.slides}>
        <input type="radio" name="radio-btn" id="img_1" checked={false} />
        <li className={styles.slide_container}>
          <div className={styles.slide}>
            <img alt="Шторы" src={product.image} />
          </div>
          <div className={styles.nav}>
            <label htmlFor="img_6" className={styles.prev}>
              &#x2039;
            </label>
            <label htmlFor="img_2" className={styles.next}>
              &#x203a;
            </label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img_2" />
        <li className={styles.slide_container}>
          <div className={styles.slide}>
            <img alt="Шторы" src="https://obninsksite.ru/assets/theme/images/blog/slider/2.jpg" />
          </div>
          <div className={styles.nav}>
            <label htmlFor="img_1" className={styles.prev}>
              &#x2039;
            </label>
            <label htmlFor="img_3" className={styles.next}>
              &#x203a;
            </label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img_3" />
        <li className={styles.slide_container}>
          <div className={styles.slide}>
            <img alt="Шторы" src="https://obninsksite.ru/assets/theme/images/blog/slider/3.jpg" />
          </div>
          <div className={styles.nav}>
            <label htmlFor="img_2" className={styles.prev}>
              &#x2039;
            </label>
            <label htmlFor="img_4" className={styles.next}>
              &#x203a;
            </label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img_4" />
        <li className={styles.slide_container}>
          <div className={styles.slide}>
            <img alt="Шторы" src="https://obninsksite.ru/assets/theme/images/blog/slider/4.jpg" />
          </div>
          <div className={styles.nav}>
            <label htmlFor="img_3" className={styles.prev}>
              &#x2039;
            </label>
            <label htmlFor="img_5" className={styles.next}>
              &#x203a;
            </label>
          </div>
        </li>

        <li className={styles.nav_dots}>
          <label htmlFor="img_1" className={styles.nav_dot} id="img_dot_1" />
          <label htmlFor="img_2" className={styles.nav_dot} id="img_dot_2" />
          <label htmlFor="img_3" className={styles.nav_dot} id="img_dot_3" />
          <label htmlFor="img_4" className={styles.nav_dot} id="img_dot_4" />
        </li>
      </ul>
    </div>
  );
};

export default ProductsItem;
