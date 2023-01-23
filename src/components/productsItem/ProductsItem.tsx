import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MediaSlider from '../mediaSlider/MediaSlider';

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

  return <MediaSlider />;
};

export default ProductsItem;
