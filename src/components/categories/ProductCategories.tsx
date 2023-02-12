import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from '../../redux/slices/filterSlice';

import './ProductCategories.scss';

const categories: string[] = ['Все', 'Шторы', 'Портьеры', 'Тюль', 'Жалюзи'];

const ProductCategories: React.FC = () => {
  const activeCategory = useSelector((state: any) => state.filterReducer.category);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          // рендер списка категорий
          return (
            <li
              key={index}
              onClick={() => dispatch(changeCategory(index))} // по индексу делаем перерендер
              className={activeCategory === index ? 'active' : ''}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductCategories;
