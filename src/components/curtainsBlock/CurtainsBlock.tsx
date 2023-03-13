import React from 'react';
import { Items, itemsSelector } from '../../redux/slices/itemsSlice';

import styles from '../curtainsItem/CurtainsItem.module.scss';
import CurtainsItem from '../curtainsItem/CurtainsItem';
// import { AppDispatch } from '../../redux/store';
import Loader from '../UI/loader/Loader';
import { useAppSelector } from '../../redux/store';

const CurtainsBlock: React.FC = () => {
  const { items, status } = useAppSelector(itemsSelector);
  // const dispatch = useDispatch<AppDispatch>();

  // const getItems = async () => {
  //   dispatch(fetchItems());
  // };

  // React.useEffect(() => {
  //   getItems();
  // }, []);

  const curtains = items.map((curtain: Items) => <CurtainsItem key={curtain.id} {...curtain} />);

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
        <div>
          {status === 'loading' ? (
            <Loader />
          ) : (
            <div className={styles.portfolio_wrap}>{curtains}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CurtainsBlock;
