import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, itemsSelector } from '../../redux/slices/itemsSlice';

import styles from '../curtainsItem/CurtainsItem.module.scss';
import CurtainsItem from '../curtainsItem/CurtainsItem';
import { AppDispatch } from '../../redux/store';

const CurtainsBlock: React.FC = () => {
  const { items, status } = useSelector(itemsSelector);
  const dispatch = useDispatch<AppDispatch>();

  const getItems = async () => {
    dispatch(fetchItems());
  };

  React.useEffect(() => {
    getItems();
  }, []);

  const curtains = items.map((curtain: any) => <CurtainsItem key={curtain.id} {...curtain} />);

  return (
    <div>
      {status === 'error' ? (
        <div className={styles.error}>
          <h2>Произошла ошибка 😕</h2>
          <p className={styles.error_description}>
            К сожалению, не удалось получить товары :(
            <br />
            Попробуйте повторить попытку позже.
          </p>
        </div>
      ) : (
        <div className={styles.portfolio_wrap}>
          {status === 'loading' ? 'загрузка...' : curtains}
        </div>
      )}
    </div>
  );
};

export default CurtainsBlock;
