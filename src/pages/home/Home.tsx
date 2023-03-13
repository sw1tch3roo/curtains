import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ProductCategories from '../../components/categories/ProductCategories';
import CurtainsBlock from '../../components/curtainsBlock/CurtainsBlock';
import ProductSort from '../../components/sort/ProductSort';
import Search from '../../components/UI/search/Search';

import { changePage, filterSelector, searchSelector } from '../../redux/slices/filterSlice';
import { fetchItems } from '../../redux/slices/itemsSlice';

import qs from 'qs';

import styles from './Home.module.scss';
import { useAppDispatch } from '../../redux/store';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = React.useRef<boolean>(false);
  const isMounted = React.useRef<boolean>(false);

  const [fetching, setFetching] = React.useState<Boolean>(true);

  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  const { category: activeCategory, sort: activeSort, currentPage } = useSelector(filterSelector);

  const searchValue = useSelector(searchSelector);

  const getProducts = async () => {
    // setIsLoading(true);
    // useEffect() позволяет отлавливать действия (служит для первого рендера приложения  )
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const sortBy = activeSort.sortProperty.replace('-', '');
    const order = activeSort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `search=${searchValue}` : '';

    // если sortProperty содержит минус,
    // тогда делаем сортировку по возрастанию
    // order-desc - по убыванию

    dispatch(
      // все ошибки обработаны в редаксе
      fetchItems({
        category,
        sortBy,
        order,
        search,
        currentPage,
      }),
    ); // запрос на бекэнд и сохранение пицц

    // window.scrollTo(0, 0);
  };

  // React.useEffect(() => {
  //   if (fetching) {
  //     dispatch(changePage(currentPage + 1));
  //     setFetching(false);
  //   }

  //   document.addEventListener('scroll', scrollHandler);

  //   return function () {
  //     document.removeEventListener('scroll', scrollHandler);
  //   };
  // }, [fetching]);

  // если изменились параметры и был первый рендер, то...
  React.useEffect(() => {
    if (isMounted.current) {
      // был ли первый рендер?
      const queryString = qs.stringify({
        sortProperty: activeSort.sortProperty,
        activeCategory,
        currentPage,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [activeCategory, activeSort.sortProperty, currentPage]);

  // если был первый рендер, то идет проверка URL-параметров и сохранение в Redux'е
  React.useEffect(() => {
    getProducts();
  }, [activeCategory, activeSort.sortProperty, searchValue, currentPage]);

  // // если был первый рендер, тогда запрашиваются пиццы
  React.useEffect(() => {
    window.scrollTo(0, 0); // перемещаем окно в исходное положение

    if (!isSearch.current) getProducts();

    isSearch.current = false;
  }, [activeCategory, activeSort.sortProperty, searchValue, currentPage]);

  // второй параметр - условие (в данном случае [] - didMount), то есть функция сработает только один раз
  // при изменении массива вызывается функция (если передать items - будет бесконечный вызов функции)
  // так как каждый раз массив items обновляется (срабатывает изменение состояния - setItems(items))
  // теперь при изменении activeCategory и activeSort useEffect будет срабатывать каждый раз (на их изменение)

  return (
    <div className={styles.main}>
      <div className={styles.product_header}>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.filter_header}>
          <div className={styles.categories}>
            <ProductCategories />
          </div>
          <div className={styles.sort}>
            <ProductSort />
          </div>
        </div>
      </div>
      <div className={styles.main_block}>
        <CurtainsBlock />
      </div>
    </div>
  );
};

export default Home;
