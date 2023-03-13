import React from 'react';
import { changeCategory } from '../../redux/slices/filterSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

import './ProductCategories.scss';

const categories: string[] = ['Все', 'Шторы', 'Портьеры', 'Тюль', 'Жалюзи'];

const ProductCategories: React.FC = React.memo(() => {
  const activeCategory = useAppSelector((state) => state.filterReducer.category);
  const dispatch = useAppDispatch();

  const onChangeCategory = React.useCallback((index: number) => {
    dispatch(changeCategory(index));
  }, []); // создается и не пересоздается

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          // рендер списка категорий
          return (
            <li
              key={index}
              onClick={() => onChangeCategory(index)} // по индексу делаем перерендер
              className={activeCategory === index ? 'active' : ''}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default ProductCategories;
